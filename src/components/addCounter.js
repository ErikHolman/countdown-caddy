import './addCounter.scss';

function Addcounter(props) {
  let modalInfo = {
    modalTitle: 'Add Counter',
    modalText: 'This will become logic to create a new counter.',
  };

  return (
    <>
      <div
        className='add-counter counter'
        title='Add a countdown'
        onClick={props.openModal}
      >
        <h1>+</h1>
      </div>
    </>
  );
}

export default Addcounter;
