import React from 'react';
import createDataContext from './createDataContext';
import { AuthStateType } from './types';
import { setLocalStorageItem } from '../utils/localstorageService';

const initialState: AuthStateType = {
  isloggedIn: false,
  isWalletConnected: null,
  walletAccountInfo: null,
  connectedWalletName: null,
  isMinting: false,
  mintImageUrl: null,
  mintError: null,
};
const authReducer: React.Reducer<AuthStateType, any> = (
  state = initialState,
  action
): AuthStateType => {
  switch (action.type) {
    case 'wallet_conected': {
      return {
        ...state,
        walletAccountInfo: action.payload,
        isWalletConnected: true,
      };
    }
    case 'wallet_disconnected':
      return {
        ...state,
        isWalletConnected: false,
        walletAccountInfo: null,
      };
    case 'connected_wallet_name':
      return {
        ...state,
        connectedWalletName: action.payload,
      };
    case 'minting': {
      return { ...state, isMinting: true };
    }
    case 'minting_success': {
      return { ...state, isMinting: false, mintImageUrl: action.payload };
    }
    case 'minting_failure': {
      return {
        ...state,
        isMinting: false,
        mintImageUrl: null,
        mintError: action.payload,
      };
    }
    default:
      return state;
  }
};

const startMinting =
  (dispatch: any) => async (transactionHash: string, callback: any) => {
    dispatch({ type: 'minting' });
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

      var urlencoded = new URLSearchParams();
      urlencoded.append('txn', transactionHash);

      var requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
      };

      const response = await fetch(
        'https://api.aptoswarcade.com/generate',
        requestOptions
      );
      const mintImage = await response.json();
      callback(mintImage?.urls?.image);
      dispatch({ type: 'minting_success', payload: mintImage?.urls?.image });
    } catch (err) {
      dispatch({ type: 'minting_failure', payload: err });
    }
  };

const connetAptosWallet = (dispatch: any) => async (data: any) => {
  setLocalStorageItem('walletInfo', data);
  dispatch({ type: 'wallet_conected', payload: data });
};

const setConnectedWalletName =
  (dispatch: any) => async (walletName: string) => {
    setLocalStorageItem('walletName', walletName);
    dispatch({ type: 'connected_wallet_name', payload: walletName });
  };

const updateWalletState = (dispatch: any) => async (data: any) => {
  dispatch({ type: 'wallet_conected', payload: data });
};

const disconnectAptosWallet = (dispatch: any) => async (data: any) => {
  dispatch({ type: 'wallet_disconnected' });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    connetAptosWallet,
    disconnectAptosWallet,
    updateWalletState,
    setConnectedWalletName,
    startMinting,
  },
  initialState
);
