import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import './index.css';
import WarKade from './App';
import reportWebVitals from './reportWebVitals';
import '../src/assets/styles/index.scss';

// wallets
import { PetraWallet } from 'petra-plugin-wallet-adapter';
import { BloctoWallet } from '@blocto/aptos-wallet-adapter-plugin';
import { MartianWallet } from '@martianwallet/aptos-wallet-adapter';
import {
  WalletCore,
  WalletName,
  PluginProvider,
  NetworkName,
} from '@aptos-labs/wallet-adapter-core';

import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import ErrorBoundary from './components/Errorboundary';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let network = NetworkName.Testnet;
// let network = NetworkName.Mainnet;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const wallets = [
  new PetraWallet(),
  new BloctoWallet({
    network: network,
    bloctoAppId: '84503da4-7d0f-4ced-b004-ecd81bfc333b',
  }),
  new MartianWallet(),
];

export const aptosWallet = new WalletCore(wallets);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        <WarKade />
        <ToastContainer />
      </AptosWalletAdapterProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
