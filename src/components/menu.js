import './menu.scss';
import Modal from './modal';

function Menu() {
  const hamburgerMenu = () => {
    alert('button clicked');
  };

  const githubLink = 'https://github.com/ErikHolman';
  const modalInfo = {
    modalTitle: '',
    modalText:
      "You're right, a hamburger ✨DOES✨ sound good right now." +
      '   NEWLINE SOMEHOW   ' +
      `But also, this was created by Erik Holman ${githubLink}`,
  };

  let modalVisible = false;

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
      {/* <Modal props={{ modalInfo, modalVisible }} /> */}
    </>
  );
}

export default Menu;
