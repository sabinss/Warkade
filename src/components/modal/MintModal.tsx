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
  const images = [
    require('../../assets/images/_.png'),
    require('../../assets/images/man1.jpeg'),
    require('../../assets/images/man2.jpeg'),
    require('../../assets/images/man3.jpeg'),
    require('../../assets/images/man4.jpeg'),
    require('../../assets/images/man5.jpeg'),
    require('../../assets/images/man6.jpeg'),
    require('../../assets/images/man7.jpeg'),
  ];
  const client = new AptosClient('https://fullnode.testnet.aptoslabs.com/v1');

  const [currentIndex, setCurrentIndex] = useState(0);
  const { state, startMinting } = useContext<any>(AuthContext);
  const { signAndSubmitTransaction } = useWallet();

  const [minting, setMinting] = useState(false);
  const [mintImageUri, setMintImageUri] = useState<null | string>(null);

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
        <div>
          {/* <Button name='congratulations' onClick={() => {}} /> */}
          {mintImageUri && (
            <div>
              <p className='text-color'>Congratulation</p>
            </div>
          )}
          <Button
            name={mintImageUri ? 'Mint Again' : 'Mint'}
            className={[
              'wr-primary-theme-btn',
              'mint-modal-btn',
              ...(mintImageUri ? ['success-mint'] : []),
            ]}
            onClick={async () => {
              setMinting(true);
              // handleMint();
              try {
                const transaction = await signAndSubmitTransaction(
                  mint_warcade
                );
                startMinting(transaction?.hash, (mintImageUri: string) => {
                  setMintImageUri(mintImageUri);
                });
                setMinting(false);
              } catch (e: any) {
                toast.error(e ?? 'Something went wrong', {
                  position: 'top-center',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark',
                });
                handleClose();
                console.log('Mint error', e);
                setMinting(false);
              }
            }}
          />
          {mintImageUri && (
            <h1
              className='text-color close-btn'
              style={{ fontSize: 26 }}
              onClick={handleClose}
            >
              Close
            </h1>
          )}
        </div>
      );
    }
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
          <div className='mint-modal-body-card-wrapper'>
            <div className='mint-modal-body-card'>
              {/* {!minting && mintImageUri ? (
                <img
                  src={mintImageUri}
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                <img
                  src={images[currentIndex]}
                  alt=''
                  style={{ width: '71px', height: '70px' }}
                />
              )} */}
              <ul className='list-unstyled overflow-hidden mint-char-list animate-list'>
                <li>
                  <div className="mint-img-holder">
                    <img src={require('../../assets/images/image16.png')} alt="" />
                  </div>
                </li>
                <li>
                  <div className="mint-img-holder">
                    <img src={require('../../assets/images/image11.png')} alt="" />
                  </div>
                </li>
                <li>
                  <div className="mint-img-holder">
                    <img src={require('../../assets/images/image18.png')} alt="" />
                  </div>
                </li>
                <li>
                  <div className="mint-img-holder">
                    <img src={require('../../assets/images/image16.png')} alt="" />
                  </div>
                </li>
                <li>
                  <div className="mint-img-holder">
                    <img src={require('../../assets/images/image11.png')} alt="" />
                  </div>
                </li>
                <li>
                  <div className="mint-img-holder">
                    <img src={require('../../assets/images/image18.png')} alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='d-inline-block my-3'>{showMintingView()}</div>
        </div>
      </div>
    </CustomModal>
  );
};
