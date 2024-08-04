import { render, screen } from '@/test-utils';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  test('Navbar が表示される', () => {
    render(<Navbar />);

    screen.getAllByText('Navbar').forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
