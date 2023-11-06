import './menu.scss';

function Menu(props) {
  let modalInfo = {
    modalTitle: 'HAMBURGER MENU GANG',
    modalText: `You're right, a hamburger ✨DOES✨ sound good right now. But also, this was created by Erik Holman githubLink}`,
  };

  return (
    <>
      <div className='menu'>
        <div>
          <h2>Countdown Caddy</h2>
        </div>
        <div>
          <button onClick={props.openModal}>
            <span>🍔</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
