import { CustomModal } from './CustomModal';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '../UI/Button';
import { useState } from 'react';

import { useWallet } from '@aptos-labs/wallet-adapter-react';

import { MartianWalletName } from '@martianwallet/aptos-wallet-adapter';
import { PetraWalletName } from 'petra-plugin-wallet-adapter';
import { BloctoWalletName } from '@blocto/aptos-wallet-adapter-plugin';

interface IConnectWallet {
  showModal: boolean;
  handleClose: () => void;
}

enum AllowededWallets {
  petro = 'Petro',
  blockto = 'Blockto',
  martian = 'Martian',
}

export const ConnectWallet = ({ handleClose, showModal }: IConnectWallet) => {
  const [selectedWallet, setSelectedWallet] = useState('');

  const {
    connect,
    account,
    network,
    connected,
    disconnect,
    wallet,
    wallets,
    signAndSubmitTransaction,
    signTransaction,
    signMessage,
  } = useWallet();

  const handleSelectWallet = (walletName: string) => {
    setSelectedWallet(walletName);
  };

  const handleConnectWallet = () => {
    if (AllowededWallets.petro === selectedWallet) {
      console.log({
        connect,
        account,
        network,
        wallets,
        wallet,
      });
      connect(PetraWalletName);
    } else if (AllowededWallets.martian === selectedWallet) {
      connect(MartianWalletName);
    } else if (AllowededWallets.blockto === selectedWallet) {
      connect(wallets[1]?.name);
    }
    handleClose();
  };

  return (
    <CustomModal show={showModal} handleClose={() => {}}>
      <div className='modal-border connect-wallet-container mint-modal'>
        <div className='connet-wallet-header'>
          <h1 className='text-color connet-wallet-title'>Select a Wallet</h1>
          <div
            onClick={() => {
              handleClose();
              disconnect();
            }}
            className='close'
          >
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>

        <div className='wallet-list'>
          <div
            className={`wallet-list-item d-flex  justify-content-start  align-items-center ${
              selectedWallet === AllowededWallets.petro
                ? 'wallet-list-item-active'
                : ''
            }`}
            onClick={() => handleSelectWallet(AllowededWallets.petro)}
          >
            <img
              className='wallet-img'
              src={require('../../assets/images/wallet1.png')}
            />
            <span className='text-color wallet-text'>
              {AllowededWallets.petro}
            </span>
          </div>
          <div
            className={`wallet-list-item d-flex  justify-content-start  align-items-center ${
              selectedWallet === AllowededWallets.blockto
                ? 'wallet-list-item-active'
                : ''
            }`}
            onClick={() => handleSelectWallet(AllowededWallets.blockto)}
          >
            <img
              className='wallet-img'
              src={require('../../assets/images/wallet2.png')}
            />
            <span className='text-color wallet-text'>
              {AllowededWallets.blockto}
            </span>
          </div>
          <div
            className={`wallet-list-item d-flex  justify-content-start  align-items-center ${
              selectedWallet === AllowededWallets.martian
                ? 'wallet-list-item-active'
                : ''
            }`}
            onClick={() => handleSelectWallet(AllowededWallets.martian)}
          >
            <img
              className='wallet-img'
              src={require('../../assets/images/wallet3.png')}
            />

            <span className='text-color wallet-text'>
              {AllowededWallets.martian}
            </span>
          </div>
        </div>
        <div
          className='d-flex justify-content-center mt-10'
          style={{ marginTop: 25 }}
        >
          <Button
            name='CONNECT WALLET'
            className={['wr-primary-theme-btn', 'connect-wallet-btn']}
            onClick={() => {
              handleConnectWallet();
              // connect(wallets[1]?.name);
            }}
          />
        </div>
      </div>
    </CustomModal>
  );
};
