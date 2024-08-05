import { render, screen } from '@/test-utils';
import { AboutPage } from './AboutPage';

describe(AboutPage, () => {
  test('AboutPage にタイトルと説明文が表示される', () => {
    render(<AboutPage />);

    expect(
      screen.getByRole('heading', { name: /このサイトについて/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/React SPA サンプルサイトです。/i),
    ).toBeInTheDocument();
  });
});
