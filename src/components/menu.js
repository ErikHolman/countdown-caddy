import './menu.scss';
import Modal from './modal';
import { useState } from 'react';

function Menu() {
  const [modalVisible, setModalVisible] = useState(false);

  let modalInfo = {};

  const hamburgerMenu = () => {
    modalInfo = {
      modalTitle: '',
      modalText: `You're right, a hamburger ✨DOES✨ sound good right now. But also, this was created by Erik Holman ${githubLink}`,
    };
    setModalVisible(true);
  };

  const closeHamburgerMenu = () => {
    setModalVisible(false);
  };

  const githubLink = 'https://github.com/ErikHolman';

  return (
    <>
      <div className='menu'>
        <div>
          <h2>Countdown Caddy</h2>
        </div>
        <div>
          <button onClick={hamburgerMenu}>
            <span>🍔</span>
          </button>
        </div>
      </div>
      <Modal
        modalVisible={modalVisible}
        modalInfo={modalInfo}
        closeModal={closeHamburgerMenu}
      />
    </>
  );
}

export default Menu;
