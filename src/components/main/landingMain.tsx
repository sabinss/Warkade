import React from 'react'
import { Button } from '../UI/Button'

export const LandingMain = () => {
  return (
    <main>
        <section className="index-home-section">
            <div className="banner-content">                
                <div className="container">
                    <div className="text-content">
                        <div className="banner-title">
                            <h1>
                                Mint to defeat
                            </h1>
                            <h1>The Darklord</h1>
                        </div>
                        <div className="banner-text py-4">
                            <p>
                                Our Civilization is under <span>THREAT</span>. Mint Aptos Warcades to <span>DEFEAT</span> the Dark Lord. Minting 10 Aptos Warcades <span>KILLS </span>one Dark Lord. Dark Lord has many faces but <span>VICTORY </span>can be acheived
                            </p>
                        </div>
                      
                    </div>
                </div>
                <div className="banner-bottom px-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="bottom-content">
                                    <div className="bottom-title text-center">
                                        <h6>Aptos Warcades</h6>
                                    </div>
                                    <div className="d-flex banner-image-sprite">
                                        <div className="single-image-holder">
                                            <img src={require('../../assets/images/man1.png')} alt="" />

                                        </div>
                                        <div className="single-image-holder">
                                            <img src={require('../../assets/images/man2.png')} alt="" />
                                        </div>
                                        <div className="single-image-holder">
                                            <img src={require('../../assets/images/man3.png')} alt="" />
                                        </div>
                                        <div className="single-image-holder">
                                            <img src={require('../../assets/images/man1.png')} alt="" />

                                        </div>
                                        <div className="single-image-holder">
                                            <img src={require('../../assets/images/man2.png')} alt="" />
                                        </div>
                                        <div className="single-image-holder">
                                            <img src={require('../../assets/images/man3.png')} alt="" />
                                        </div>
                                        <div className="single-image-holder">
                                            <img src={require('../../assets/images/man1.png')} alt="" />

                                        </div>
                                        <div className="single-image-holder">
                                            <img src={require('../../assets/images/man2.png')} alt="" />
                                        </div>
                                        <div className="single-image-holder">
                                            <img src={require('../../assets/images/man3.png')} alt="" />
                                        </div>
                                        <div className="single-image-holder">
                                            <img src={require('../../assets/images/man3.png')} alt="" />
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="bottom-line-grp">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="bottom-right">
                                    <div className="image-holder fire-back">
                                        <img src={require('../../assets/images/image22.png')} alt="" />
                                    </div>
                                    <Button name='Mint' className={['wr-primary-theme-btn']}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </main>
  )
}
