import './App.scss';
import Content from './components/content';
import Footer from './components/footer';
import Menu from './components/menu';

import Modal from './components/modal';
import { useState } from 'react';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  let modalInfo = {};

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className='caddy'>
      <Modal
        modalVisible={modalVisible}
        closeModal={closeModal}
        modalInfo={modalInfo}
      />
      <Menu openModal={openModal} />
      <Content openModal={openModal} />
      <Footer />
    </div>
  );
}

export default App;
