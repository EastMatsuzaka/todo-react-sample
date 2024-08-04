import { render, screen } from '@/test-utils';
import { Layout } from './Layout';
import * as Logo from '../parts/Logo';
import * as Navbar from '../parts/Navbar';
import * as TodoPage from '../pages/TodoPage';

describe(Layout, () => {
  test('Logo / Navbar / TodoPage が表示される', () => {
    const logoSpy = vi.spyOn(Logo, 'Logo');
    logoSpy.mockReturnValue(<div>Logo</div>);
    const navbarSpy = vi.spyOn(Navbar, 'Navbar');
    navbarSpy.mockReturnValue(<div>Navbar</div>);
    const todoPageSpy = vi.spyOn(TodoPage, 'TodoPage');
    todoPageSpy.mockReturnValue(<div>TodoPage</div>);

    render(<Layout />);

    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Navbar')).toBeInTheDocument();
    expect(screen.getByText('TodoPage')).toBeInTheDocument();
  });
});
