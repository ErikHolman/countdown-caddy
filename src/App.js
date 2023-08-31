import './App.scss';
import Content from './components/content';
import Footer from './components/footer';
import Menu from './components/menu';

function App() {
  return (
    <div className='caddy'>
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
