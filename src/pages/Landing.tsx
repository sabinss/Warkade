import React from 'react';
import { Header ,Footer} from '../components';
import { LandingMain } from '../components/main/landingMain';


export const Landing = () => {
  return (
    <div id='landing'>
      <Header />
      <LandingMain/>
      <Footer/>
    </div>
  );
};
