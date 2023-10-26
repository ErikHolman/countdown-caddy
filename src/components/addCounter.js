import './addCounter.scss';
import { useState } from 'react';
import Modal from './modal';

function Addcounter() {
  const [isVisible, setIsVisible] = useState(false);
  let modalInfo = {};

  const addForm = () => {
    modalInfo = {
      modalTitle: 'Yay!',
      modalText: 'This is set by the form being created',
    };
    setIsVisible(true);
  };

  const closeModal = (state) => {
    setIsVisible(false);
    modalInfo = {};
  };

  return (
    <>
      <Modal
        modalInfo={modalInfo}
        modalVisible={isVisible}
        closeModal={closeModal}
      />
      <div
        className='add-counter counter'
        title='Add a countdown'
        onClick={addForm}
      >
        <h1>+</h1>
      </div>
    </>
  );
}

export default Addcounter;
