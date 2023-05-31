import React, { useState, useContext, useEffect } from 'react';
import { Header, Footer } from '../components';
import { LandingMain } from '../components/main/LandingMain';
import { ConnectWallet } from '../components/modal/ConnectWallet';
import { DisconnectWallet } from '../components/modal/DisconnectWallet';
import { WalletNames } from '../enums';
import { Context as AuthContext } from '../context/authContext';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

export const Landing = () => {
  const [connectWalletModal, setConnectWalletModal] = useState(false);

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
  const {
    state: {},
    connetAptosWallet,
  } = useContext<any>(AuthContext);

  const updateWalletAccount = () => {
    connetAptosWallet(account);
  };

  useEffect(() => {
    updateWalletAccount();
  }, [account]);

  console.log('account222', account);
  return (
    <div id='landing'>
      <Header
        handleConnectWallet={() => {
          setConnectWalletModal(true);
        }}
      />
      <LandingMain />
      <Footer />
      <ConnectWallet
        showModal={connectWalletModal}
        handleClose={() => {
          setConnectWalletModal(false);
        }}
      />
      {/* <DisconnectWallet
        showModal={connectWalletModal}
        connectedWallet={WalletNames.petra}
        handleClose={() => {
          setConnectWalletModal(false);
        }}
      /> */}
    </div>
  );
};
