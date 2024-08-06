import { render, screen } from '@/test-utils';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from './routesConfig';

describe('routesConfig', () => {
  test('/ で TodoPage が表示される', () => {
    vi.mock('./components/pages/TodoPage', () => ({
      TodoPage: vi.fn().mockReturnValue(<div>TodoPage</div>),
    }));

    const router = createMemoryRouter(routesConfig, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);

    expect(screen.getByText('TodoPage')).toBeInTheDocument();
  });

  test('/about で AboutPage が表示される', () => {
    vi.mock('./components/pages/AboutPage', () => ({
      AboutPage: vi.fn().mockReturnValue(<div>AboutPage</div>),
    }));

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/about'],
    });
    render(<RouterProvider router={router} />);

    expect(screen.getByText('AboutPage')).toBeInTheDocument();
  });

  test('/async-todo で AsyncTodoPage が表示される', () => {
    vi.mock('./components/pages/AsyncTodoPage', () => ({
      AsyncTodoPage: vi.fn().mockReturnValue(<div>AsyncTodoPage</div>),
    }));

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/async-todo'],
    });
    render(<RouterProvider router={router} />);

    expect(screen.getByText('AsyncTodoPage')).toBeInTheDocument();
  });

  test('存在しないパスで RouteErrorPage が表示される', () => {
    vi.mock('./components/pages/RouteErrorPage', () => ({
      RouteErrorPage: vi.fn().mockReturnValue(<div>RouteErrorPage</div>),
    }));

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/not-found'],
    });
    render(<RouterProvider router={router} />);

    expect(screen.getByText('RouteErrorPage')).toBeInTheDocument();
  });
});
