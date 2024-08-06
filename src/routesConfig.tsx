import { RouteObject } from 'react-router-dom';
import { Layout } from './components/Layout';
import { TodoPage } from './components/pages/TodoPage';
import { RouteErrorPage } from './components/pages/RouteErrorPage';
import { AboutPage } from './components/pages/AboutPage';
import { AsyncTodoPage } from './components/pages/AsyncTodoPage';

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        index: true,
        element: <TodoPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'async-todo',
        element: <AsyncTodoPage />,
      },
    ],
  },
];
