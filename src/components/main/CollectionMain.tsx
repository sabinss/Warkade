import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DisconnectWallet } from '../modal/DisconnectWallet';
import { startFetchMyQuery } from './fetchCollectionData';
import { Context as AuthContext } from '../../context';
import { ConnectWallet } from '../modal/ConnectWallet';
import ErrorBoundary from '../Errorboundary';

export const CollectionMain = () => {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const { state } = useContext<any>(AuthContext);
  const [mintImages, setMintImages] = useState<any[]>([]);
  const [fetchingMintImages, setFetchingMintImages] = useState(true);
  const [connectWalletModal, setConnectWalletModal] = useState(false);

  useEffect(() => {
    startFetchMyQuery(state, (data) => {
      if (data) {
        console.log('mint Images', data);
        setFetchingMintImages(false);
        setMintImages(data);
      } else {
        setFetchingMintImages(false);
      }
    });
  }, [state.walletAccountInfo]);

  const ConnectedView = () => {
    return (
      <>
        {mintImages.map((mintImage: any) => {
          return (
            <div className='col-md-4 py-3'>
              <div
                className='collection-card'
                style={{ borderRadius: 10, height: 200 }}
              >
                <div
                  className='card-img'
                  style={{ width: '90%', height: '90%' }}
                >
                  <img src={mintImage.image} alt='' />
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const DisconnectedView = () => {
    return (
      <div className='col-lg-12'>
        <div className='disconneted-frame d-flex align-items-center justify-content-center'>
          <p>Please Connect Your Wallet to View Your Collection</p>
          <div className='btn-wrap w-100 py-3'>
            <button
              className='wr-primary-theme-btn mx-auto d-block'
              onClick={() => {
                setConnectWalletModal(true);
              }}
            >
              Connect wallet
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='position-relative'>
      <div className='container-fluid custom-container'>
        <div className='row d-flex align-items-end'>
          <div className='col-lg-4'>
            <div className='brick-imgt collection-pg'>
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
                <div className='img-flame-wrap'>
                  <div className='sword-wrap'>
                    <img
                      src={require('../../assets/images/Burning-Sword.gif')}
                      alt=''
                    />
                  </div>
                  <div className='flame-wrap'>
                    <img
                      src={require('../../assets/images/Torch.gif')}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='side-bottom'>
              <p>So much NFT collecting, so little time.</p>
              <div className='bottom-image-wrap'>
                <div className='img-wrap'>
                  <img
                    src={require('../../assets/images/image11.png')}
                    alt=''
                  />
                </div>
                <div className='bottom-line-grp  d-inline-block'>
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
          </div>
          <div className='col-lg-8'>
            <div className='icon-grp-text icon-grp-text_reversed'>
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
            <div
              className={`collection-frame ${
                mintImages.length <= 6 ? 'hide-scrollbar' : 'show-scrollbar'
              }`}
            >
              <div className='row h-100 '>
                {state.isWalletConnected ? (
                  <ErrorBoundary>
                    <ConnectedView />
                  </ErrorBoundary>
                ) : (
                  <DisconnectedView />
                )}
              </div>
            </div>
          </div>
          <ConnectWallet
            showModal={connectWalletModal}
            handleClose={() => {
              setConnectWalletModal(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};
