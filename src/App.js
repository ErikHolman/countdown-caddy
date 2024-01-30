import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Header from './components/header';
import Body from './components/body';

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

export default function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Body />
    </FluentProvider>
  );
}
