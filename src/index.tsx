import React, {useContext, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import './index.css';
import WarKade from './App';
import reportWebVitals from './reportWebVitals';
import '../src/assets/styles/index.scss';

// wallets
import {PetraWallet} from 'petra-plugin-wallet-adapter';
import {BloctoWallet} from '@blocto/aptos-wallet-adapter-plugin';
import {MartianWallet} from '@martianwallet/aptos-wallet-adapter';
import {WalletCore, NetworkName} from '@aptos-labs/wallet-adapter-core';

import {AptosWalletAdapterProvider} from '@aptos-labs/wallet-adapter-react';
// import ErrorBoundary from './components/Errorboundary';
import {ErrorBoundary} from 'react-error-boundary';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PropsProvider} from './context/propsContext';
import {Context as AuthContext} from '../src/context';

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

function ErrorFallback({error, resetErrorBoundary}: any) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

interface IAptosWarkade {
  accountAddress?: string;
  signAndSubmitTransaction?: any;
  setConnectModalOpen?: any;
  transaction?: any;
}
const accountAddress = '0x1234567890';

const signAndSubmitTransaction = (transaction: any) => {
  console.log('transaction', transaction);
};

const setConnectModalOpen = (walletName: string) => {
  //open connect wallet here
  // after wallet connect set wallet address
  console.log('walletName', walletName);
};
const AptosWarkade = (props: IAptosWarkade) => {
  const {
    accountAddress,
    signAndSubmitTransaction,
    setConnectModalOpen,
    transaction,
  } = props;

  const {connetAptosWallet, setLoading} = useContext<any>(AuthContext);

  useEffect(() => {
    // accountAddress this aaccountAddress should be account object from useWallet hook
    connetAptosWallet(accountAddress, () => {
      setLoading(false);
    });
  }, [accountAddress]);

  return (
    <React.StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
          <PropsProvider
            accountAddress={accountAddress}
            transaction={transaction}
            setConnectModalOpen={setConnectModalOpen}
            signAndSubmitTransaction={signAndSubmitTransaction}
          >
            <WarKade />
          </PropsProvider>
          <ToastContainer />
        </AptosWalletAdapterProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

root.render(
  <AptosWarkade
    accountAddress={accountAddress}
    signAndSubmitTransaction={signAndSubmitTransaction}
    setConnectModalOpen={setConnectModalOpen}
  />
);

export default AptosWarkade;

reportWebVitals();
