import './modal.scss';
import { useState } from 'react';

function Modal({ props }) {
  const [isVisible, setIsVisible] = useState(props.modalVisible);

  let modalText = props.modalInfo.modalText
    ? props.modalInfo.modalText
    : 'default text';
  let modalTitle = props.modalInfo.modalTitle
    ? props.modalInfo.modalTitle
    : 'default title';

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div>
          <div className='modal'>
            <div className='modalContent'>
              <button className='closeModal' onClick={closeModal}>
                X
              </button>
              <h2>{modalTitle}</h2>
              <br />
              <span>{modalText}</span>
            </div>
          </div>
          <div className='modalCover' />
        </div>
      )}
    </>
  );
}

export default Modal;
