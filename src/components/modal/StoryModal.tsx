import React from 'react';
import { CustomModal } from './CustomModal';
import { AiOutlineClose } from 'react-icons/ai';

interface IStoryModal {
  showModal: boolean;
  handleClose: () => void;
}

export const StoryModal = ({ showModal, handleClose }: IStoryModal) => {
  return (
    <CustomModal
      show={showModal}
      handleClose={() => {
        console.log('handleclose');
      }}
    >
      <div className='mint-modal story-modal'>
        <div className='story-modal-header d-flex justify-content-between'>
          <div className='d-flex justify-content-center align-items-center'>
            <h1 className='text-color story-modal-title'>Story</h1>
            <img
              src={require('../../assets/images/volkan-sozbir-swordtrans 1.png')}
              alt=''
            />
          </div>
          <div
            className='col-lg-1 mint-modal-header-icon'
            onClick={() => handleClose()}
          >
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>
        <div className='story-content'>
          <p className='text-color story-content-p'>
            Season 1 - Mint 100k Aptos Warcades to defeat the Dark Lord. A Dark
            Lord has intruded the Aptos kingdom threating to destroy the
            prosperous and thriving kingdom, and bring an end to the Aptonian
            civilization. APTON, the great and almighty King has ordered Aptos
            Warcades to destroy the Dark Lord before he spread his evil and
            bring chaos. As loyal civilians of the Aptos Kingdom, it is upon us
            Aptonians to defeat the Dark Lord and help keep the land flourish.
            It will not be easy to defeat the Dark Lord, but if we all rally
            togehter, nothing is impossible. How can the Dark Lord be defeated?
            By minting as many Aptos Warcades as possible. The Dark Lord has
            many faces. Every time Aptos Civilians mint 10 NFTs, 9 NFTs will be
            Aptos Warcades and 1 NFT will be a face of the Dark Lord. Whoever
            mints the Dark Lord kills it. Did the Aptos Civilians defeat the
            Dark Lord? Wait and See.
          </p>
          <img
            className='story-content-img'
            src={require('../../assets/images/image22.png')}
            alt=''
          />
        </div>
      </div>
    </CustomModal>
  );
};
