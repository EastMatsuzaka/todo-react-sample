import { render, screen } from '@/test-utils';
import { RouteErrorPage } from './RouteErrorPage';

describe(RouteErrorPage, () => {
  test('RouteErrorPage にエラーメッセージが表示される', () => {
    vi.mock('react-router-dom', () => ({
      useRouteError: vi.fn().mockReturnValue({
        status: 404,
        statusText: 'Not Found',
      }),
      isRouteErrorResponse: vi.fn().mockReturnValue(true),
    }));

    render(<RouteErrorPage />);

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
});
