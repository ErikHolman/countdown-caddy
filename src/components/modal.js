import './modal.scss';
import Blocker from './blocker';

function Modal(props) {
  let currentModalText = props.modalInfo.modalText;
  let currentModalTitle = props.modalInfo.modalTitle;

  let modalVisible = props.modalVisible;

  return (
    <>
      {modalVisible && (
        <div>
          <Blocker />
          <div className='modal'>
            <div className='modalContent'>
              <button className='closeModal' onClick={props.closeModal}>
                X
              </button>
              <h2>{currentModalText}</h2>
              <br />
              <div>{currentModalTitle}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
