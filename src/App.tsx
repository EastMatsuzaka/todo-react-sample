import '@mantine/core/styles.css';
import { Loader, MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { theme } from './theme';
import { routesConfig } from './routesConfig';
import { Suspense } from 'react';

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <MantineProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </MantineProvider>
  );
}

export default App;
