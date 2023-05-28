import { AiOutlineClose } from 'react-icons/ai';
import { CustomModal } from './CustomModal';
import { Button } from '../UI/Button';
import { useContext } from 'react';
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

  const { state } = useContext<any>(AuthContext);
  const { signAndSubmitTransaction } = useWallet();

  const [minting, setMinting] = useState(false);

  const mint_warcade = {
    type: 'entry_function_payload',
    function:
      '0xfdf9f2962710e0722e2694061419dc1594405a5e478a1d232350069a3253ff94::warkade::mint_warkade',
    type_arguments: [],
    arguments: [],
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
              <img
                src={require('../../assets/images/_.png')}
                alt=''
                style={{ width: '71px', height: '70px' }}
              />
            </div>
          </div>
          <div className='d-inline-block my-3'>
            <Button
              name={minting ? 'loading..' : 'Mint'}
              className={['wr-primary-theme-btn', 'mint-modal-btn']}
              onClick={async () => {
                setMinting(true);
                // handleMint();
                try {
                  const transaction = await signAndSubmitTransaction(
                    mint_warcade
                  );
                  setMinting(false);
                  console.log({ transaction });
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
          </div>
        </div>
      </div>
    </CustomModal>
  );
};
