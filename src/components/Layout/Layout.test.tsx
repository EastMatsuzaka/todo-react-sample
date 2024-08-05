import { render, screen } from '@/test-utils';
import { Layout } from './Layout';
import * as Logo from '../parts/Logo';
import * as Navbar from '../parts/Navbar';

describe(Layout, () => {
  test('Logo / Navbar / TodoPage が表示される', () => {
    const logoSpy = vi.spyOn(Logo, 'Logo');
    logoSpy.mockReturnValue(<div>Logo</div>);
    const navbarSpy = vi.spyOn(Navbar, 'Navbar');
    navbarSpy.mockReturnValue(<div>Navbar</div>);
    vi.mock('react-router-dom', () => ({
      Outlet: vi.fn().mockReturnValue(<div>Outlet</div>),
    }));

    render(<Layout />);

    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Navbar')).toBeInTheDocument();
    expect(screen.getByText('Outlet')).toBeInTheDocument();
  });
});
