// imports
import {
  makeStyles,
  Button,
  Card,
  CardHeader,
  CardFooter,
  Text,
  Caption1,
  tokens,
  shorthands,
} from '@fluentui/react-components';
import { MoreHorizontal20Regular } from '@fluentui/react-icons';
import * as React from 'react';
import { useState } from 'react';
import Loader from '../components/loader';

// functions
const useStyles = makeStyles({
  card: {
    width: '250px',
    maxWidth: '100%',
    height: 'fit-content',
    minHeight: '400px;',
  },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
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
      { title: 'sample 1', date: 'tomorrow' },
      { title: 'sample 2', date: 'yesterday' },
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
          <div>
            <Loader />
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
            return (
              <Card className={styles.card} key={index}>
                <CardHeader
                  header={<Text weight='semibold'>{counter.title}</Text>}
                  description={
                    <Caption1 className={styles.caption}>
                      {counter.date} {index + 1}
                    </Caption1>
                  }
                  action={
                    <Button
                      appearance='transparent'
                      icon={<MoreHorizontal20Regular />}
                      aria-label='More actions'
                    />
                  }
                />
                <CardFooter>
                  <Text weight='medium'>{counter.remaining} days left!</Text>
                </CardFooter>
              </Card>
            );
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
