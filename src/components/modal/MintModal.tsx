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

  const DARK_LORD_CODE = 'Dark Lord';

  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    state: {
      walletAccountInfo,
      mintImageUrl: stateMintImageUrl,
      totalNumberOfMintRemaining,
    },
    startMinting,
    fetchRemainingMint,
    fetchTotalMint,
  } = useContext<any>(AuthContext);
  const { signAndSubmitTransaction } = useWallet();

  const [minting, setMinting] = useState(false);
  const [mintImageUri, setMintImageUri] = useState<null | string>(null);
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [darkLordMinted, setDarkLordMinted] = useState(false);

  useEffect(() => {
    return () => {
      setIsFirstOpen(false);
    };
  }, []);

  const mint_warcade = {
    type: 'entry_function_payload',
    function:
      '0x74533a9947300fba32287f4d65e0cee49fbdc629a9f439701f3918901eb5c797::warkade::mint',
    type_arguments: [],
    arguments: [],
  };

  const isDarkLordMinted = (checkDarkLordMint: any) => {
    try {
      const { changes } = checkDarkLordMint;
      const darkLordCheckArray = changes.find((obj: any) => {
        if (obj?.data?.data?.inner?.data) {
          return obj?.data?.data?.inner?.data;
        }
      });
      const bodyCheck = darkLordCheckArray?.data?.data?.inner?.data.find(
        (x: any) => x.key.toLowerCase() === 'body'
      );
      if (
        bodyCheck?.value?.value.toLowerCase() === DARK_LORD_CODE.toLowerCase()
      ) {
        setDarkLordMinted(() => true);
      } else {
        setDarkLordMinted(() => false);
      }
    } catch (e) {}
  };
  // font-size: 10px;
  // background: red;
  // width: 100%;
  // line-height: 18.5px;
  // margin-bottom: 45px;
  // margin-top: 20px;
  const DarkLordMintedView = () => {
    return (
      <div style={{ marginBottom: 45, marginTop: 20 }}>
        <p style={{ fontSize: 10 }}>
          Congratulations you have been awarded a Mystery Box for minting the
          Dark Lord.
        </p>
        <p style={{ fontSize: 10 }}>Try Again to mint more Dark Lords</p>
      </div>
    );
  };

  const NormalMintView = () => {
    return (
      <div style={{ marginBottom: 45, marginTop: 20 }}>
        <p style={{ fontSize: 10 }}>
          Congratulations you have minted a Aptos Warcade
        </p>
        <p style={{ fontSize: 10 }}>Try Again to mint more Dark Lords</p>
      </div>
    );
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
          {/* <DarkLordMintedView />
           */}
          {mintImageUri && darkLordMinted && <DarkLordMintedView />}
          {mintImageUri && !darkLordMinted && <NormalMintView />}
          <div className='gif-holder'>
            {!mintImageUri && (
              <img
                src={require('../../assets/images/Burning-Sword.gif')}
                alt=''
              />
            )}
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
                const checkDarkLordMint = await client.getTransactionByHash(
                  transaction?.hash
                );
                const isDarkLord = isDarkLordMinted(checkDarkLordMint);
                startMinting(transaction?.hash, (mintImageUri: string) => {
                  setMinting(() => true);
                  setMintImageUri(() => mintImageUri);
                  setMinting(() => false);
                  fetchTotalMint(walletAccountInfo?.address);
                  fetchRemainingMint(walletAccountInfo?.address);
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
              onClick={() => {
                handleClose();
                reset();
              }}
            >
              Close
            </h2>
          )}
        </div>
      );
    }
  };

  const reset = () => {
    setMintImageUri(null);
    setMinting(false);
    setIsFirstOpen(false);
  };

  const showCardImage = () => {
    if (!minting && !mintImageUri) {
      return (
        <img
          src={require('../../assets/images/Characters-shuffle.gif')}
          alt=''
          style={{ width: '100%', height: '100%' }}
        />
      );
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
    return (
      <img
        src={require('../../assets/images/Characters-shuffle.gif')}
        alt=''
        style={{ width: '100%', height: '100%' }}
      />
    );
  };

  return (
    <CustomModal
      show={showModal}
      handleClose={() => {
        handleClose();
        reset();
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
            onClick={() => {
              handleClose();
              reset();
            }}
          >
            <AiOutlineClose
              style={{
                color: '#E7D08C',
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 10,
              }}
            />
          </div>
        </div>
        <p
          style={{
            fontSize: 10,
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Total Remaining Mint: {totalNumberOfMintRemaining}
        </p>
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
