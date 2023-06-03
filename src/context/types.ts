export interface AuthStateType {
  isloggedIn: boolean;
  isWalletConnected: null | boolean;
  walletAccountInfo: any;
  connectedWalletName: string | null;
  isMinting: boolean;
  mintImageUrl: null | string;
  mintError: any;
  walletConnetLoading: boolean;
}
