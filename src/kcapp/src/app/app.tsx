import NxWelcome from './nx-welcome';
import Personal from '../libs/personal/personal';
import { SrcPerson } from '@test/person';

export function App() {
  return (
    <>
      <NxWelcome title="src-kcapp" />
      <SrcPerson />
      <Personal title="NguyenGiaSon" />
      <div />
    </>
  );
}

export default App;
