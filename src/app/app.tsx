// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import Notify from 'src/notifi/notify';
import { SrcPerson } from '@test/person';

export function App() {
  return (
    <>
      <NxWelcome title="keycloak" />
      <Notify />
      <div />
    </>
  );
}

export default App;
