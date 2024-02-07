// imports
import {
  Button,
  Divider,
  tokens,
  shorthands,
  makeStyles,
} from '@fluentui/react-components';
import { DrinkCoffee24Filled } from '@fluentui/react-icons';

// functions
const useStyles = makeStyles({
  main: {
    height: '60px',
    backgroundColor: tokens.colorBrandBackground,
    display: 'flex',
    flexDirection: 'column',
  },
  items: {
    ...shorthands.gap('36px'),
    display: 'flex',
    color: 'white',
    height: '100%',
    justifyContent: 'space-around',
    fill: 'white',
  },
});

// export
export default function Header() {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <div className={styles.items}>
        <h2>Countdown Caddy</h2>
        <Button appearance='transparent' icon={<DrinkCoffee24Filled />} />
      </div>
      <Divider />
    </div>
  );
}
