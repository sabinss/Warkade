import React from 'react';
// import HeaderLogo from '../../assets/svg/Logo.svg';
import HeaderLogo from '../../assets/images/HeaderLogo.png';
import { Button } from '../UI/Button';

export const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6">
                <div className='header_logo px-5 w-50'>
                  <img src={HeaderLogo} alt='HeaderLogo' />;
                </div>
            </div>
            <div className="col-lg-6">
              <div className="head-right float-end px-5">
                  <Button name='connect wallets' className={['wr-primary-theme-btn wr-primary-theme-btn_header  px-3']}/>
               </div>
            </div>
        </div>
      </div>
      
     
    </header>
  );
};
