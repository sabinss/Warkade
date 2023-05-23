import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className="containter-fluid">
          <div className="footer-content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footer-content-wrap footer-left">
                    <a href="">
                     © APTOS WARCADES
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-content-wrap footer-mid">
                    <ul className='list-unstyled d-flex'>
                      <li>
                        <a href="">
                          Story
                        </a>
                      </li>
                      <li>
                        <a href="">
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="footer-content-wrap footer-right">
                    <ul className='list-unstyled d-flex'>
                      <li>
                        <a href="">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </footer>
  )
};
