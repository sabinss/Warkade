import React, { useState } from 'react';
import { Header, Footer } from '../components';
import { CollectionMain } from '../components/';
import { ConnectWallet } from '../components/modal/ConnectWallet';
import { CollectionLoader } from '../components/common/CollectionLoader';
import { MystryMain } from '../components/main/MystryMain';

export const Mystry = () => {
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  return (
    <div className='Collection'>
      <Header
        handleConnectWallet={() => {
          setShowConnectWallet(true);
        }}
      />
        <MystryMain/>
      <ConnectWallet
        showModal={showConnectWallet}
        handleClose={() => setShowConnectWallet(false)}
      />
      <Footer />
    </div>
  );
};
