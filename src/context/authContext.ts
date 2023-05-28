import React from 'react';
import createDataContext from './createDataContext';
import { AuthStateType } from './types';
import { setLocalStorageItem } from '../utils/localstorageService';

const initialState: AuthStateType = {
  isloggedIn: false,
  isWalletConnected: null,
  walletAccountInfo: null,
  connectedWalletName: null,
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
    default:
      return state;
  }
};

const connetAptosWallet = (dispatch: any) => async (data: any) => {
  setLocalStorageItem('walletInfo', data);
  dispatch({ type: 'wallet_conected', payload: data });
};

const setConnectedWalletName =
  (dispatch: any) => async (walletName: string) => {
    console.log('walletName', walletName);
    setLocalStorageItem('walletName', walletName);
    dispatch({ type: 'connected_wallet_name', payload: walletName });
  };

const updateWalletState = (dispatch: any) => async (data: any) => {
  dispatch({ type: 'wallet_conected', payload: data });
};

const disconnectAptosWallet = (dispatch: any) => async (data: any) => {
  console.log('connetAptosWallet', data);
  dispatch({ type: 'wallet_disconnected' });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    connetAptosWallet,
    disconnectAptosWallet,
    updateWalletState,
    setConnectedWalletName,
  },
  initialState
);
