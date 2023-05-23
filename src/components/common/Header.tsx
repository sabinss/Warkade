import React from 'react';
// import HeaderLogo from '../../assets/svg/Logo.svg';
import HeaderLogo from '../../assets/images/HeaderLogo.png';
import { Button } from '../UI/Button';

export const Header = () => {
  return (
    <header id='header'>
      <div className='header_logo'>
        <img src={HeaderLogo} alt='HeaderLogo' />;
      </div>
      <Button name='connect wallets' styles={{ backgroundColor: 'red' }} />
    </header>
  );
};
