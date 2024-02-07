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

export default function Counter(counter, index) {
  const styles = useStyles();

  <div>
    <Card className={styles.card}>
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
  </div>;
}
