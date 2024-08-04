import { render, screen } from '@/test-utils';
import { Logo } from './Logo';

describe(Logo, () => {
  test('Logo が表示される', () => {
    render(<Logo />);

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });
});
