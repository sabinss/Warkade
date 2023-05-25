import { CustomModal } from './CustomModal';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '../UI/Button';
import { WalletNames } from '../../enums';

interface IDisconnectWallet {
  showModal: boolean;
  handleClose: () => void;
  connectedWallet: WalletNames;
}

export const DisconnectWallet = ({
  handleClose,
  showModal,
  connectedWallet,
}: IDisconnectWallet) => {
  return (
    <CustomModal show={showModal} handleClose={() => {}}>
      <div className='modal-border disconnect-wallet'>
        <div className='disconnet-wallet-header d-flex justify-content-between'>
          <h1 className='text-color default-font-size '>Disconnect Wallet</h1>
          <div onClick={handleClose}>
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>

        <div className='disconnet-wallet-body d-flex justify-content-between'>
          <div className='wallet-list-item d-flex  justify-content-start  align-items-center wallet-list-item-active'>
            <img
              className='wallet-img'
              src={require('../../assets/images/wallet1.png')}
            />
            <span className='text-color wallet-text'>{connectedWallet}</span>
          </div>
          <Button
            name='DISCONNECT'
            textStyle={{ fontSize: 9 }}
            className={['wr-primary-theme-btn', 'disconnet-wallet-btn']}
            onClick={() => {}}
          />
        </div>
        <p className='text-color' style={{ fontSize: 10, marginTop: 10 }}>
          Note:Disconnect Current Wallet to Connect Another Wallet
        </p>
      </div>
    </CustomModal>
  );
};
