import '@mantine/core/styles.css';
import { Button, MantineProvider } from '@mantine/core';
import { theme } from './theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      <Button>ボタン</Button>
    </MantineProvider>
  );
}

export default App;
