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
                
                </div>
              </div>
            </div>
            <div className='side-bottom'>
             
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
                      <Link to ='/mysterybox'> Mystery Box</Link>
                  </li>
                </ul>
              </div>
            
            </div>
            <div className='collection-frame hide-scrollbar'>
              <div className='row h-100 '>
                <div className="col-md-4 py-2">
                    <div className="collection-card">
                      <img src={require('../../assets/images/Mystery.jpg')} alt="" />
                    </div>
                </div> 
                <div className="col-md-4 py-2">
                    <div className="collection-card">
                      <img src={require('../../assets/images/Mystery.jpg')} alt="" />
                    </div>
                </div>           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
