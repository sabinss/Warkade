import React from 'react'
import { Link } from 'react-router-dom'

export const MystryMain = () => {
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
              <div className="tab-link-wrap">
                <ul>
                  <li>
                  
                      <Link to ='/collections'> My Collection</Link>
                  </li>
                  <li className='selected'>
                      <Link to ='/mystrybox'> Mystry Box</Link>
                  </li>
                </ul>
              </div>
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
                Mystry Page
              </h6>
            </div>
            <div className=''>
              <div className='row h-100 '>
                <div className="collection-frame hide-scrollbar">
                Mystry page
                </div>
                           
              </div>
            </div>
          </div>
         
     
        </div>
      </div>
    </div>
  )
}
