import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Caption1,
  makeStyles,
  Text,
  tokens,
  shorthands,
} from '@fluentui/react-components';
import { MoreHorizontal20Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  card: {
    width: '250px',
    maxWidth: '100%',
    height: 'fit-content',
    minHeight: '400px;',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
  missedEvent: {
    color: 'red',
    fontWeight: 'bolder',
  },
});

export default function Counter({ counter, index }) {
  const styles = useStyles();

  return (
    <div>
      <Card className={styles.card}>
        <CardHeader
          header={<Text weight='semibold'>{counter.title}</Text>}
          description={
            <Caption1 className={styles.caption}>{counter.date}</Caption1>
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
          <div>
            {counter.remaining < 0 ? (
              <Text className={styles.missedEvent} weight='medium'>
                {counter.remaining} {counter.countUnit} since event.
              </Text>
            ) : (
              <Text weight='medium'>
                {counter.remaining} {counter.countUnit} left!
              </Text>
            )}
          </div>
          <div>{index}</div>
        </CardFooter>
      </Card>
    </div>
  );
}
