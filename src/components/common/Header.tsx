import React, { useContext, useState, useEffect } from 'react';
// import HeaderLogo from '../../assets/svg/Logo.svg';
import HeaderLogo from '../../assets/images/logonew.png';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../../context';
import { truncateStringInBetween } from '../../utils/stringHelper';
import { DisconnectWallet } from '../modal/DisconnectWallet';
import { CustomModal } from '../modal/CustomModal';
import { AiOutlineClose } from 'react-icons/ai';
interface IHeader {
  handleConnectWallet: () => void;
}

export const Header = ({ handleConnectWallet }: IHeader) => {
  const [openDisconnetWallet, setDisconnectWallet] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const {
    state: { isWalletConnected, walletAccountInfo },
    disconnectAptosWallet,
  } = useContext<any>(AuthContext);
 const [balanceModal, setBalanceModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConnecting = () => {
    setConnecting(true);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    setConnecting(false);
  }, [walletAccountInfo, isWalletConnected]);

  return (
    <header>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-lg-4 col-sm-6 col-12'>
            <div className='header_logo px-5 w-lg-75 mb-2'>
              <Link to={'/'}>
                <img src={HeaderLogo} alt='HeaderLogo' />
              </Link>
            </div>
          </div>
          <div className='col-lg-8 col-sm-6 col-12'>
            <div className='head-right float-lg-end  float-sm-none px-lg--5 d-flex'>
              <Button name='00.00' onClick={() => {
                    setBalanceModal(true)
                    // disconnectAptosWallet();
                  }}   className={[
                    'wr-primary-theme-btn wr-primary-theme-btn_header  mx-2  px-3',
                  ]}
                  />
              {isWalletConnected && walletAccountInfo ? (
                <Button
                  onClick={() => {
                    setDisconnectWallet(true);
                    // disconnectAptosWallet();
                  }}
                  name={
                    walletAccountInfo &&
                    truncateStringInBetween(walletAccountInfo?.address, 20)
                  }
                  className={[
                    'wr-primary-theme-btn wr-primary-theme-btn_header  px-3',
                  ]}
                />
              ) : (
                // ${
                //   connecting && 'button-animation '
                // }
                <Button
                  onClick={() => {
                    handleConnecting();
                    handleConnectWallet();
                  }}
                  name={`${loading ? 'loading...' : 'connect wallets'}`}
                  className={[
                    `wr-primary-theme-btn wr-primary-theme-btn_header  px-3`,
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <DisconnectWallet
        handleClose={() => setDisconnectWallet(false)}
        showModal={openDisconnetWallet}
        connectedWallet={'Petra'}
        handleDisconnet={() => {
          setDisconnectWallet(false);
          disconnectAptosWallet();
        }}

      />
      {/* // balanceModal */}
    {
      balanceModal &&
      <CustomModal show={true} handleClose={()=>{setBalanceModal(false)}}>
          <div className="deposit-modal">
            <div className="modal-header">
              <h4 className='mb-3 text-center'>Deposit Now</h4>
              <div onClick={()=>{}} className='close'>
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
            </div>
            <div className="modal-body">
             
                <form action="">
                  <div className="form-grp depo_selector">
                    <input type="radio" name='amnt' value='0.1' className='hidden-check'  />
                    <label htmlFor="0.1">0.1</label>
                  </div>
                  <div className="form-grp depo_selector">
                    <input type="radio" name='amnt' value='0.2' className='hidden-check'  />
                    <label htmlFor="0.2">0.2</label>
                  </div>
                  <div className="form-grp depo_selector">
                    <input type="radio" name='amnt' value='0.3' className='hidden-check'  />
                    <label htmlFor="0.3">0.3</label>
                  </div>
                  <div className="form-grp depo_selector">
                    <input type="radio" name='amnt' value='0.5' className='hidden-check'  />
                    <label htmlFor="0.5">0.5</label>
                  </div>
                  <div className="form-grp depo_selector">
                    <input type="radio" name='amnt' value='0.7' className='hidden-check'  />
                    <label htmlFor="0.7">0.7</label>
                  </div>
                  <div className="form-grp depo_selector">
                    <input type="radio" name='amnt' value='1.0' className='hidden-check'  />
                    <label htmlFor="1.0">1.0</label>
                  </div>
                </form>
                <Button name='Deposit now' onClick={() => {
                    
                    // disconnectAptosWallet();
                  }}   className={[
                    'wr-primary-theme-btn my-3 mx-auto d-block px-3  text-uppercase',
                  ]}
                  />
            </div>
          </div>
      </CustomModal>
    }


    </header>
  );
};

// reference
// https://github.com/aptos-labs/aptos-wallet-adapter/blob/main/packages/wallet-adapter-react/src/WalletProvider.tsx
// https://github.com/aptos-labs/aptos-wallet-adapter/tree/main/packages/wallet-adapter-react#examples
// https://aptos.dev/integration/wallet-adapter-for-dapp
