import './modal.scss';

function Modal({ props }) {
  let modalText = props.modalInfo.modalText
    ? props.modalInfo.modalText
    : 'default text';
  let modalTitle = props.modalInfo.modalTitle
    ? props.modalInfo.modalTitle
    : 'default title';

  const closeModal = () => {};

  console.log(props.modalVisible);
  return (
    <>
      <div className='modalCover' />
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
    </>
  );
}

export default Modal;
