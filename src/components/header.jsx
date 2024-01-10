// imports
import {
  Button,
  Divider,
  Text,
  tokens,
  shorthands,
  makeStyles,
} from '@fluentui/react-components';
import { DrinkCoffee24Filled } from '@fluentui/react-icons';

// functions
const useStyles = makeStyles({
  main: {
    ...shorthands.gap('36px'),
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
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

// export
export default function Header() {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <div>
        <Text>A text</Text>
        <Button appearance='transparent' icon={<DrinkCoffee24Filled />}>
          A Button
        </Button>
      </div>
      <Divider />
    </div>
  );
}
