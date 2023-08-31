import './addCounter.scss';
import Modal from './modal';

function Addcounter() {
  const modalInfo = {
    modalTitle: 'realTitles',
    modalText: 'Some real text',
  };

  let modalVisible = false;

  const addForm = () => {
    modalVisible = !modalVisible;
  };

  return (
    <>
      <div
        className='add-counter counter'
        title='Add a countdown'
        onClick={addForm}
      >
        <h1>+</h1>
      </div>
      {/* <Modal props={{ modalInfo, modalVisible }} /> */}
    </>
  );
}

export default Addcounter;
