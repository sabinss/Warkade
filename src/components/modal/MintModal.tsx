import { AiOutlineClose } from 'react-icons/ai';
import { CustomModal } from './CustomModal';
import { Button } from '../UI/Button';
import { useContext, useEffect } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { Context as AuthContext } from '../../context';
import { useState } from 'react';
import { AptosClient } from 'aptos';
import { toast } from 'react-toastify';

interface IMintModal {
  showModal: boolean;
  handleClose: () => void;
  handleMint: () => void;
}

export const MintModal = ({
  showModal,
  handleClose,
  handleMint,
}: IMintModal) => {
  const client = new AptosClient('https://fullnode.testnet.aptoslabs.com/v1');

  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    state: { mintImageUrl: stateMintImageUrl },
    startMinting,
  } = useContext<any>(AuthContext);
  const { signAndSubmitTransaction } = useWallet();

  const [minting, setMinting] = useState(false);
  const [mintImageUri, setMintImageUri] = useState<null | string>(null);
  const [isFirstOpen, setIsFirstOpen] = useState(false);

  useEffect(() => {
    return () => {
      setIsFirstOpen(false);
    };
  }, []);

  const mint_warcade = {
    type: 'entry_function_payload',
    function:
      '0xfdf9f2962710e0722e2694061419dc1594405a5e478a1d232350069a3253ff94::warkade::mint_warkade',
    type_arguments: [],
    arguments: [],
  };

  const showMintingView = () => {
    if (minting) {
      return (
        <div>
          <p className='text-color'>Minting in progress...</p>
          <p className='text-color'>please wait.</p>
        </div>
      );
    } else {
      return (
        <div className='sucessBox'>
          {/* <Button name='congratulations' onClick={() => {}} /> */}
          {mintImageUri && (
            <div className='sucess-text'>
              <p className='text-color'>Congratulation</p>
            </div>
          )}
          <div className='gif-holder'>
            <img src={require('../../assets/images/Burning-Sword.gif')} alt='' />
          </div>
          <Button
            name={mintImageUri ? 'Mint Again' : 'Mint'}
            className={[
              'wr-primary-theme-btn',
              'mint-modal-btn mx-auto',
              ...(mintImageUri ? ['success-mint'] : []),
            ]}
            onClick={async () => {
              setIsFirstOpen(true);
              setMinting(true);
              setMintImageUri(null);
              // handleMint();
              try {
                const transaction = await signAndSubmitTransaction(
                  mint_warcade
                );
                startMinting(transaction?.hash, (mintImageUri: string) => {
                  setMinting(() => true);
                  setMintImageUri(() => mintImageUri);
                  setMinting(() => false);
                });
                setMinting(() => false);
              } catch (e: any) {
                toast.error(
                  'We couldnot approve the transaction.' ??
                    'Something went wrong',
                  {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                  }
                );
                handleClose();
                setMinting(false);
              }
            }}
          />
          {mintImageUri && (
            <h2
              className='text-color close-btn'
              style={{ fontSize: 15 }}
              onClick={handleClose}
            >
              Close
            </h2>
          )}
        </div>
      );
    }
  };

  const showCardImage = () => {
    console.log({ minting, mintImageUri });
    if (!minting && !mintImageUri && !stateMintImageUrl) {
      if (!isFirstOpen) {
        return (
          <img
            src={require('../../assets/images/_.png')}
            alt=''
            style={{ width: '71px', height: '70px' }}
          />
        );
      } else {
        return null;
      }
    }
    if (minting && !mintImageUri) {
      return (
        <ul
          className={`list-unstyled overflow-hidden mint-char-list ${
            minting ? 'animate-list' : ''
          }`}
        >
          <li>
            <div className='mint-img-holder'>
              <img src={require('../../assets/images/man1.jpeg')} alt='' />
            </div>
          </li>
          <li>
            <div className='mint-img-holder'>
              <img src={require('../../assets/images/man2.jpeg')} alt='' />
            </div>
          </li>
          <li>
            <div className='mint-img-holder'>
              <img src={require('../../assets/images/man3.jpeg')} alt='' />
            </div>
          </li>
          <li>
            <div className='mint-img-holder'>
              <img src={require('../../assets/images/man4.jpeg')} alt='' />
            </div>
          </li>
          <li>
            <div className='mint-img-holder'>
              <img src={require('../../assets/images/man5.jpeg')} alt='' />
            </div>
          </li>
          <li>
            <div className='mint-img-holder'>
              <img src={require('../../assets/images/man6.jpeg')} alt='' />
            </div>
          </li>
          <li>
            <div className='mint-img-holder'>
              <img src={require('../../assets/images/man7.jpeg')} alt='' />
            </div>
          </li>
          <li>
            <div className='mint-img-holder'>
              <img src={require('../../assets/images/man8.jpeg')} alt='' />
            </div>
          </li>
        </ul>
      );
    }
    if (!minting && mintImageUri) {
      return (
        <img
          src={mintImageUri}
          alt=''
          style={{ width: '100%', height: '100%' }}
        />
      );
    }
    return null;
  };

  return (
    <CustomModal
      show={showModal}
      handleClose={() => {
        handleClose();
      }}
    >
      {/* design mint modal here */}
      <div className='mint-modal'>
        <div className='mint-modal-header'>
          <div className='col-lg-11 mint-modal-header-title'>
            <h2 className='mint-modal-header-title'>Mint</h2>
          </div>
          <div
            className='col-lg-1 mint-modal-header-icon close'
            onClick={handleClose}
          >
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>
        <div className='mint-modal-body my-3'>
          <div className='mint-modal-body-card-wrapper d-flex'>
            <div className='flame-holder'>
              <img src={require('../../assets/images/Torch.gif')} alt='' />
            </div>
            <div
              className={`mint-modal-body-card ${
                mintImageUri ? ' hero-card' : ''
              }`}
            >
              {showCardImage()}
            </div>
            <div className='flame-holder'>
              <img src={require('../../assets/images/Torch.gif')} alt='' />
            </div>
          </div>
          <div className='d-inline-block mb-3'>{showMintingView()}</div>
        </div>
      </div>
    </CustomModal>
  );
};
// Mizan Shrestha
