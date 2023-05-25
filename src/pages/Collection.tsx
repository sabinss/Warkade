import React from 'react';
import { Header ,Footer} from '../components';
import { CollectionMain } from '../components/';

export const Collections = () => {
  return (
    <div className='Collection'>
      <Header />
        <CollectionMain/>
        <Footer/>
      </div>
  )
};
