import { render, screen } from '@/test-utils';
import { Navbar } from './Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {
  test('Navbar に todo と about のリンクが表示される', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Todo' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'API Request Todo' }),
    ).toBeInTheDocument();
  });
});
