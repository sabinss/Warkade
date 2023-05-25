import React, { useState } from 'react';
import { Header, Footer } from '../components';
import { LandingMain } from '../components/main/LandingMain';
import { ConnectWallet } from '../components/modal/ConnectWallet';
import { DisconnectWallet } from '../components/modal/DisconnectWallet';
import { WalletNames } from '../enums';

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
