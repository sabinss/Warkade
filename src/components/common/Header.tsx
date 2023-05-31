import React, { useContext, useState, useEffect } from 'react';
// import HeaderLogo from '../../assets/svg/Logo.svg';
import HeaderLogo from '../../assets/images/HeaderLogo.png';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../../context';
import { truncateStringInBetween } from '../../utils/stringHelper';
import { DisconnectWallet } from '../modal/DisconnectWallet';
interface IHeader {
  handleConnectWallet: () => void;
}

export const Header = ({ handleConnectWallet }: IHeader) => {
  const [openDisconnetWallet, setDisconnectWallet] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const {
    state: { isWalletConnected, walletAccountInfo },
    disconnectAptosWallet,
  } = useContext<any>(AuthContext);

  const handleConnecting = () => {
    setConnecting(true);
  };

  useEffect(() => {
    setConnecting(false);
  }, [walletAccountInfo, isWalletConnected]);

  return (
    <header>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-lg-4 col-12'>
            <div className='header_logo px-5 w-lg-75 mb-2'>
              <Link to={'/'}>
                <img src={HeaderLogo} alt='HeaderLogo' />
              </Link>
            </div>
          </div>
          <div className='col-lg-8 col-12'>
            <div className='head-right float--lg-end float-sm-none px-5'>
              {isWalletConnected && walletAccountInfo ? (
                <Button
                  onClick={() => {
                    setDisconnectWallet(true);
                    // disconnectAptosWallet();
                  }}
                  name={
                    walletAccountInfo &&
                    truncateStringInBetween(walletAccountInfo?.address, 20)
                  }
                  className={[
                    'wr-primary-theme-btn wr-primary-theme-btn_header  px-3',
                  ]}
                />
              ) : (
                <Button
                  onClick={() => {
                    handleConnecting();
                    handleConnectWallet();
                  }}
                  name='connect wallets'
                  className={[
                    `wr-primary-theme-btn wr-primary-theme-btn_header  px-3 ${
                      connecting && 'button-animation '
                    }`,
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <DisconnectWallet
        handleClose={() => setDisconnectWallet(false)}
        showModal={openDisconnetWallet}
        connectedWallet={'Petra'}
        handleDisconnet={() => {
          setDisconnectWallet(false);
          disconnectAptosWallet();
        }}
      />
    </header>
  );
};

// reference
// https://github.com/aptos-labs/aptos-wallet-adapter/blob/main/packages/wallet-adapter-react/src/WalletProvider.tsx
// https://github.com/aptos-labs/aptos-wallet-adapter/tree/main/packages/wallet-adapter-react#examples
// https://aptos.dev/integration/wallet-adapter-for-dapp
