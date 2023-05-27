import React from 'react';
// import HeaderLogo from '../../assets/svg/Logo.svg';
import HeaderLogo from '../../assets/images/HeaderLogo.png';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

interface IHeader {
  handleConnectWallet: () => void;
}

export const Header = ({ handleConnectWallet }: IHeader) => {
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
  return (
    <header>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-lg-4'>
            <div className='header_logo px-5 w-75'>
              <Link to={'/'}>
                <img src={HeaderLogo} alt='HeaderLogo' />
              </Link>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='head-right float-end px-5'>
              <Button
                onClick={() => {
                  handleConnectWallet();
                }}
                name='connect wallets'
                className={[
                  'wr-primary-theme-btn wr-primary-theme-btn_header  px-3',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// reference
// https://github.com/aptos-labs/aptos-wallet-adapter/blob/main/packages/wallet-adapter-react/src/WalletProvider.tsx
// https://github.com/aptos-labs/aptos-wallet-adapter/tree/main/packages/wallet-adapter-react#examples
// https://aptos.dev/integration/wallet-adapter-for-dapp
