import React, { useState } from 'react';
import { Header, Footer } from '../components';
import { LandingMain } from '../components/main/LandingMain';
import { ConnectWallet } from '../components/main/ConnectWallet';

export const Landing = () => {
  const [connectWalletModal, setConnectWalletModal] = useState(false);

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
    </div>
  );
};
