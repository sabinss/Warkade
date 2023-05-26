import React, { useState } from 'react';
import { StoryModal } from '../modal/StoryModal';

export const Footer = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);
  return (
    <footer>
      <div className='containter-fluid px-5'>
        <div className='footer-content'>
          <div className='row align-items-center'>
            <div className='col-lg-3'>
              <div className='footer-content-wrap footer-left'>
                <a href=''>© APTOS WARCADES</a>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='footer-content-wrap footer-mid'>
                <ul className='list-unstyled d-flex'>
                  <li onClick={() => setShowStoryModal(true)}>
                    <p style={{ color: '#E7D08C', fontSize: 12 }}>Story</p>
                  </li>
                  <li>
                    <a href=''>FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className='footer-content-wrap footer-right'>
                <ul className='list-unstyled d-flex'>
                  <li>
                    <a href=''>Privacy Policy</a>
                  </li>
                  <li>
                    <a href=''>Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StoryModal
        showModal={showStoryModal}
        handleClose={() => {
          setShowStoryModal(false);
        }}
      />
    </footer>
  );
};
