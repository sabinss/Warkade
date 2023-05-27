import { AiOutlineClose } from 'react-icons/ai';
import { CustomModal } from './CustomModal';
import { Button } from '../UI/Button';

interface IMintModal {
  showModal: boolean;
  handleClose: () => void;
  handleMint: () => void;
}

export const MintModal = ({
  showModal,
  handleClose,
  handleMint,
}: IMintModal) => {
  return (
    <CustomModal
      show={showModal}
      handleClose={() => {
        handleClose();
      }}
    >
      {/* design mint modal here */}
      <div className='mint-modal'>
        <div className='mint-modal-header'>
          <div className='col-lg-11 mint-modal-header-title'>
            <h2 className='mint-modal-header-title'>Mint</h2>
          </div>
          <div
            className='col-lg-1 mint-modal-header-icon close'
            onClick={handleClose}
          >
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>
        <div className='mint-modal-body my-3'>
          <div className='mint-modal-body-card-wrapper'>
            <div className='mint-modal-body-card'>
              <img
                src={require('../../assets/images/_.png')}
                alt=''
                style={{ width: '71px', height: '70px' }}
              />
            </div>
          </div>
          <div className='d-inline-block my-3'>
            <Button
              name='Mint'
              className={['wr-primary-theme-btn', 'mint-modal-btn']}
              onClick={() => {
                handleMint();
              }}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};
