import {
  FluentProvider,
  webLightTheme,
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
import Header from './components/header';

/* --

Figma design: {FIGMA URL}

APP:

Nav
  + Menu
    - Add
    - Edit
    - Remove
  + Hamburger Menu

Content
  + Current Countdowns
  + New Countdowns

Footer
  + Copyright info
  + Link to github
  

General UI

  + Dialog as Modals
    - New Countdown
      - Calendar
      - Dropdown
      - Input
      - Image
      - Info Label
      - Select for type
      - Switch
      - Text
    - Edit Countdown
      - Toast on successful edit
    - Delete Countdown confirm
      - Toast on successful delete
    - Hamburger menu
  + Divider as separation between content types ✅
    - [horz] nav, content, bottom
    - [vert] between countdowns
  + Card as Countdown ✅
    - Existing countdown
      - has Tooltip
      - Time
      - Variants
    - New countdown
      - has Tooltip


-- */
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

export default function App() {
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

  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
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
    </FluentProvider>
  );
}
