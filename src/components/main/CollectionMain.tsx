import React from 'react'
import { Link } from 'react-router-dom'

export const CollectionMain = () => {
  return (
    <div>
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-lg-3">
              <div className="brick-imgt">

              </div>
              <div className="side-bottom">
                <p>I should connect my wallet to get the flaming sword</p>
              </div>
            </div>
            <div className="col-lg-9">
                <div className="icon-grp-text icon-grp-text_reversed">
                      <ul className="list-unstyled d-flex icon-grp">
                          <li>
                            <div className="icon-holder">
                              <img src={require("../../assets/images/coin.png")} alt="" />
                            </div>
                          </li>
                          <li>
                            <div className="icon-holder">
                              <img src={require("../../assets/images/coin.png")} alt="" />
                            </div>
                          </li>
                          <li>
                            <div className="icon-holder">
                              <img src={require("../../assets/images/coin.png")} alt="" />
                            </div>
                          </li>
                      </ul>
                      <h6>
                        <Link to={'/collections'}>
                        My Collection</Link>
                      </h6>
                  </div>
                  <div className="collection-frame">
                      <div className="row">
                        <div className="col-md-4 py-2">
                            <div className="collection-card">
                                <div className="card-img">
                                  <img src={require('../../assets/images/image11.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-2">
                            <div className="collection-card">
                                <div className="card-img">
                                  <img src={require('../../assets/images/image11.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-2">
                            <div className="collection-card">
                                <div className="card-img">
                                  <img src={require('../../assets/images/image11.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-2">
                            <div className="collection-card">
                                <div className="card-img">
                                  <img src={require('../../assets/images/image11.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-2">
                            <div className="collection-card">
                                <div className="card-img">
                                  <img src={require('../../assets/images/image11.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-2">
                            <div className="collection-card">
                                <div className="card-img">
                                  <img src={require('../../assets/images/image11.png')} alt="" />
                                </div>
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
