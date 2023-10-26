import './modal.scss';
import Blocker from './blocker';

function Modal({ modalInfo, modalVisible, closeModal }) {
  let currentModalText = modalInfo.modalText
    ? modalInfo.modalText
    : 'default text';
  let currentModalTitle = modalInfo.modalTitle
    ? modalInfo.modalTitle
    : 'default title';

  return (
    <>
      {modalVisible && (
        <div>
          <Blocker />
          <div className='modal'>
            <div className='modalContent'>
              <button className='closeModal' onClick={closeModal}>
                X
              </button>
              <h2>{currentModalTitle}</h2>
              <br />
              <div>{currentModalText}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
