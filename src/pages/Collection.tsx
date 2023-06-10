import React, { useState } from 'react';
import { Header, Footer } from '../components';
import { CollectionMain } from '../components/';
import { ConnectWallet } from '../components/modal/ConnectWallet';

export const Collections = () => {
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  return (
    <div className='Collection'>
      <Header
        handleConnectWallet={() => {
          setShowConnectWallet(true);
        }}
      />
      <CollectionMain />
      <ConnectWallet
        showModal={showConnectWallet}
        handleClose={() => setShowConnectWallet(false)}
      />
      <Footer />
    </div>
  );
};
