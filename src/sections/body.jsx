// imports
import { makeStyles, shorthands, Spinner } from '@fluentui/react-components';
import { useState } from 'react';
import Counter from '../components/counter';

// functions
const useStyles = makeStyles({
  content: {
    ...shorthands.gap('36px'),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footer: {
    ...shorthands.gap('36px'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-around',
    textAlign: 'center',
  },
  main: {
    ...shorthands.gap('36px'),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    paddingTop: '2em',
  },
});

export default function Body() {
  const [countdowns, setCountdowns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const styles = useStyles();

  const dummyUpMyData = () => {
    setCountdowns([
      {
        title: 'sample 1',
        date: 'tomorrow',
        caption: 'This is the event',
        remaining: '>1',
      },
      {
        title: 'sample 2',
        date: 'yesterday',
        caption: 'This is the event',
        remaining: '-1',
      },
    ]);
  };

  const dummyKillData = () => {
    setCountdowns([]);
  };

  /* 
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response) => {
        response.json();
        console.log(response);
      }
    );
  */

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {isLoading && (
          <div className={styles.loading}>
            <Spinner />
            <h1>Locating the countdowns...</h1>
            <h3>🤔 I know they're around here somewhere 🤔</h3>
            <strong>*sound of multiple bookshelves being knocked over*</strong>
            <br />
            <button onClick={() => setIsLoading(false)}>click to stop</button>
          </div>
        )}
        {!isLoading && countdowns.length === 0 && (
          <div>
            <h1>NO COUNTERS YO</h1>
            <button onClick={dummyUpMyData}>
              LOAD ME UP WITH DUMMY DATA BUTTON
            </button>
          </div>
        )}
        {!isLoading &&
          countdowns.length > 0 &&
          countdowns.map((counter, index) => {
            return <Counter counter={counter} index={index} key={index} />;
          })}
      </div>
      {!isLoading && countdowns.length > 0 && (
        <div className={styles.footer}>
          <button onClick={dummyKillData}>DUMMY DATA KILLING BUTTON</button>
          <button onClick={() => setIsLoading(true)}>
            CHANGE LOADING STATE BUTTON
          </button>
        </div>
      )}
    </div>
  );
}
