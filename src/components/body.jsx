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

// functions
const useStyles = makeStyles({
  main: {
    ...shorthands.gap('36px'),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: '250px',
    maxWidth: '100%',
    height: 'fit-content',
    minHeight: '400px;',
  },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
});

export default function Body() {
  const styles = useStyles();

  const countdowns = [
    {
      title: 'Event 1',
      date: ' Jan 11, 2634',
      color: '#000000',
      format: 'mdhs',
      remaining: '75',
      image: '',
    },
    {
      title: 'Event 2 🦿',
      date: ' July 11, 2634',
      color: '#000000',
      format: 'd',
      remaining: '234',
      image: 'pic',
    },
  ];

  return (
    <div className={styles.main}>
      {countdowns.map((counter, index) => {
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
  );
}
