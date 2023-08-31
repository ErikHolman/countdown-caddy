import './content.scss';
import Counter from './counter';
import Addcounter from './addCounter';

function Content() {
  const countdowns = [
    {
      title: 'My Birthday',
      date: ' Jan 11, 2634',
      color: '#000000',
      format: 'mdhs',
      remaining: '75',
      image: '',
    },
    {
      title: 'Vacay!',
      date: ' July 11, 2634',
      color: '#000000',
      format: 'd',
      remaining: '234',
      image: 'pic',
    },
  ];
  return (
    <div className='content'>
      <div className='countdowns'>
        {countdowns.length === 0 ? (
          <div>
            <h3>
              hmm... no countdowns were found.
              <br />
              Add one?
            </h3>
            <Addcounter />
          </div>
        ) : (
          <div>
            <h3>Cool, there are {countdowns.length} countdowns</h3>
            <Counter props={countdowns} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
