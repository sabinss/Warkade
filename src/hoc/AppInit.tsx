import React, { useContext, useEffect, useState } from 'react';
import { getLocalStorageItem } from '../utils/localstorageService';
import { Context as AuthContext } from '../context';

export const AppInit = ({ children }: any) => {
  const [appInitialize, setAppInitialize] = useState(false);

  const { state, connetAptosWallet, setLoading } = useContext<any>(AuthContext);

  useEffect(() => {
    setLoading(true);
    const walletInfo = getLocalStorageItem('walletInfo');
    console.log({ walletInfo });
    if (walletInfo) {
      connetAptosWallet(walletInfo);
    }
    setLoading(false);
  }, []);
  return <div>{children}</div>;
};
