import './counter.scss';
import Addcounter from './addCounter';

function Counter(props) {
  let countdowns = props.countdownInfo;
  return (
    <div className='countdowns'>
      {countdowns.map((counter, index) => {
        return (
          <div
            className={counter.image ? 'hasImage counter' : 'counter'}
            title={`'${counter.title}' is in ${counter.remaining} days`}
            key={index}
          >
            {counter.image ? (
              <span className='eventImage'>{counter.image}</span>
            ) : (
              ''
            )}
            <div className='eventDetails'>
              <div>
                <span className='eventTitle'>{counter.title}</span>
                <br />
                <span className='eventDate'>{counter.date}</span>
              </div>
              <div className='eventCountdown'>{counter.remaining}</div>
            </div>
          </div>
        );
      })}
      <Addcounter {...props} />
    </div>
  );
}

export default Counter;
