import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../UI/Button';

import { MintModal } from '../modal/MintModal';

import { CustomModal } from '../index';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Context as AuthContext } from '../../context/authContext';
import { ConnectWallet } from '../modal/ConnectWallet';
import { CollectionLoader } from '../common/CollectionLoader';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

import { toast } from 'react-toastify';

export const LandingMain = () => {
  const {
    state: {
      isWalletConnected,
      walletAccountInfo,
      mintRemaining,
      totalMinted,
      totalNumberOfMintRemaining,
    },
    fetchTotalMint,
    fetchRemainingMint,
  } = useContext<any>(AuthContext);
  const [mintModal, setMintModal] = useState(false);
  const [openConnectWallet, setConnectWallet] = useState(false);
  const [balanceModal, setBalanceModal] = useState(false);
  const handleMint = () => {
    setMintModal(true);
  };

  const { signAndSubmitTransaction } = useWallet();
  useEffect(() => {}, [walletAccountInfo?.address, totalMinted]);

  const handleDeposit = async () => {
    const deposit_payload = {
      type: 'entry_function_payload',
      function:
        '0x74533a9947300fba32287f4d65e0cee49fbdc629a9f439701f3918901eb5c797::warkade::deposit',
      type_arguments: [],
      arguments: ['10000000'],
    };

    try {
      await signAndSubmitTransaction(deposit_payload);
      setBalanceModal(false);
      fetchTotalMint(walletAccountInfo?.address);
      fetchRemainingMint(walletAccountInfo?.address);
      toast.success('Amount has been deposited successfully.');
    } catch (error: any) {
      toast.error(error?.message ?? 'Deposit failed. Please try again!.');
    }
  };

  return (
    <main>
      <section className='index-home-section'>
        <div className='banner-content'>
          <div className='custom-container'>
            <div className='text-content'>
              <div className='banner-title'>
                <h1>Mint to defeat</h1>
                <h1>The Darklord</h1>
              </div>
              <div className='banner-text py-3'>
                <p>
                  Our Civilization is under <span>THREAT</span>. Mint Aptos
                  Warcades to <span>DEFEAT</span> the Dark Lord. Minting 10
                  Aptos Warcades <span>KILLS </span>one Dark Lord. Dark Lord has
                  many faces but <span>VICTORY </span>can be acheived
                </p>
              </div>
            </div>
          </div>
          <div className='banner-bottom '>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-9 position-relative'>
                  <div className='bottom-content'>
                    <div className='bottom-title text-center'>
                      <h6>Aptos Warcades</h6>
                    </div>
                    <div className='d-flex banner-image-sprite'>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man1.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man2.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man3.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man4.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man5.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man6.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man7.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man8.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man9.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man10.jpeg')}
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                  <div className='below-bottom-content d-lg-flex align-align-items-start'>
                    <div className='bottom-left  d-inline-block'>
                      <div className='icon-grp-text'>
                        <ul className='list-unstyled d-flex icon-grp'>
                          <li>
                            <div className='icon-holder'>
                              <img
                                src={require('../../assets/images/WarcadiaCoinAnimation.gif')}
                                alt=''
                              />
                            </div>
                          </li>
                          <li>
                            <div className='icon-holder'>
                              <img
                                src={require('../../assets/images/WarcadiaCoinAnimation.gif')}
                                alt=''
                              />
                            </div>
                          </li>
                          <li>
                            <div className='icon-holder'>
                              <img
                                src={require('../../assets/images/WarcadiaCoinAnimation.gif')}
                                alt=''
                              />
                            </div>
                          </li>
                        </ul>
                        <h6>
                          <Link to={'/collections'}>My Collection</Link>
                        </h6>
                      </div>
                    </div>

                    <div className='bottom-line-grp  d-inline-block'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='bottom-right'>
                    <div className='img-btn-wrap'>
                      <div className='image-holder fire-back'>
                        <img
                          src={require('../../assets/images/DarkLordAnimation.gif')}
                          alt=''
                        />
                      </div>
                      <div className='btn-wrap d-flex'>
                        <Button
                          name='Mint'
                          className={['wr-primary-theme-btn']}
                          onClick={() => {
                            // if (+mintRemaining?.totalBalance < 0) {
                            // } else {
                            //   setBalanceModal(true);
                            // }
                            if (!walletAccountInfo) {
                              setConnectWallet(true);
                            } else if (
                              walletAccountInfo &&
                              +mintRemaining?.totalBalance > 0
                            ) {
                              setMintModal(true);
                            } else if (
                              walletAccountInfo &&
                              +mintRemaining?.totalBalance <= 0
                            ) {
                              setBalanceModal(true);
                            }
                          }}
                        />
                      </div>
                    </div>
                    {isWalletConnected && walletAccountInfo && (
                      <div className='img-flamesword'>
                        <img
                          src={require('../../assets/images/heart.png')}
                          alt=''
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='total-mint-detail '>
            {isWalletConnected && walletAccountInfo && (
              <ul className='list-unstyled'>
                <li>
                  <strong>Health : </strong>
                  <span>
                    {mintRemaining?.health ? mintRemaining?.health : 0}
                  </span>
                </li>
                <li>
                  <strong>Total warcades minted : </strong>
                  <span>{totalMinted?.guid_creation_num}</span>
                </li>
              </ul>
            )}
          </div>
          <div className='brick-imgt '>
            <div className='brick-icon-wrap'>
              <div className='brick-icon'>
                <img
                  src={require('../../assets/images/Rectangle37.png')}
                  alt=''
                />
              </div>
              <div className='brick-icon'>
                <img
                  src={require('../../assets/images/Rectangle37.png')}
                  alt=''
                />
              </div>
              <div className='brick-icon'>
                <img
                  src={require('../../assets/images/Rectangle37.png')}
                  alt=''
                />
              </div>
            </div>
            <div className='brick-flame-wrap'>
              <div className='img-flame-wrap'>
                <div className='sword-wrap'>
                  <img
                    src={require('../../assets/images/Burning-Sword.gif')}
                    alt=''
                  />
                </div>
                <div className='flame-wrap'>
                  <img src={require('../../assets/images/Torch.gif')} alt='' />
                </div>
              </div>
              <div className='brick-left'>
                <div className='brick-icon-wrap'>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                </div>
                <div className='brick-icon-wrap'>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                </div>
                <div className='brick-icon-wrap'>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MintModal
        showModal={mintModal}
        handleMint={() => {
          handleMint();
        }}
        handleClose={() => setMintModal(false)}
      />
      <ConnectWallet
        showModal={openConnectWallet}
        handleClose={() => {
          setConnectWallet(false);
        }}
      />
      {/* // balanceModal */}
      {balanceModal && (
        <CustomModal
          show={true}
          handleClose={() => {
            setBalanceModal(false);
          }}
        >
          <div className='deposit-modal'>
            <div className='modal-header'>
              <h4 className='mb-3 text-center'>Deposit Now</h4>
              <div
                onClick={() => {
                  setBalanceModal(false);
                }}
                className='close'
              >
                <AiOutlineClose
                  style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
                />
              </div>
            </div>
            <div className='modal-body'>
              <form action=''>
                <div className='row'>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='0.1'
                        className='hidden-check'
                      />
                      <label htmlFor='0.1'>0.1</label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='0.2'
                        className='hidden-check'
                      />
                      <label htmlFor='0.2'>0.2</label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='0.3'
                        className='hidden-check'
                      />
                      <label htmlFor='0.3'>0.3</label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='0.5'
                        className='hidden-check'
                      />
                      <label htmlFor='0.5'>0.5</label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='0.7'
                        className='hidden-check'
                      />
                      <label htmlFor='0.7'>0.7</label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='1.0'
                        className='hidden-check'
                      />
                      <label htmlFor='1.0'>1.0</label>
                    </div>
                  </div>
                </div>
              </form>
              <Button
                name='Deposit now'
                onClick={handleDeposit}
                className={[
                  'wr-primary-theme-btn my-3 mx-auto d-block px-3  text-uppercase',
                ]}
              />
            </div>
          </div>
        </CustomModal>
      )}
    </main>
  );
};
