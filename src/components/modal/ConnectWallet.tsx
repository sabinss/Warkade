import { CustomModal } from './CustomModal';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '../UI/Button';

interface IConnectWallet {
  showModal: boolean;
  handleClose: () => void;
}

export const ConnectWallet = ({ handleClose, showModal }: IConnectWallet) => {
  return (
    <CustomModal show={showModal} handleClose={() => {}}>
      <div className='modal-border connect-wallet-container mint-modal'>
        <div className='connet-wallet-header'>
          <h1 className='text-color connet-wallet-title'>Select a Wallet</h1>
          <div onClick={handleClose} className='close'>
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>
        <div className='wallet-list'>
          <div className='wallet-list-item d-flex  justify-content-start  align-items-center wallet-list-item-active'>
            <img
              className='wallet-img'
              src={require('../../assets/images/wallet1.png')}
            />
            <span className='text-color wallet-text'>Petra</span>
          </div>
          <div className='wallet-list-item  d-flex justify-content-start align-items-center'>
            <img
              className='wallet-img'
              src={require('../../assets/images/wallet2.png')}
            />
            <span className='text-color wallet-text'>Blockto</span>
          </div>
          <div className='wallet-list-item d-flex justify-content-start align-items-center'>
            <img
              className='wallet-img'
              src={require('../../assets/images/wallet3.png')}
            />

            <span className='text-color wallet-text'>Martian</span>
          </div>
        </div>
        <div
          className='d-flex justify-content-center mt-10'
          style={{ marginTop: 25 }}
        >
          <Button
            name='CONNECT WALLET'
            className={['wr-primary-theme-btn', 'connect-wallet-btn']}
            onClick={() => {}}
          />
        </div>
      </div>
    </CustomModal>
  );
};
