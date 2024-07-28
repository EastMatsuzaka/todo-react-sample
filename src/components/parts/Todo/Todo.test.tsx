import { render, screen, userEvent } from '@/test-utils';
import { Todo } from './Todo';

describe(Todo, () => {
  test('未完了タスク内容が表示される', () => {
    const onChange = vi.fn();
    render(<Todo label="タスク" completed={false} onChange={onChange} />);

    const labelElement = screen.getByText('タスク');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('完了タスク内容が表示される', () => {
    const onChange = vi.fn();
    render(<Todo label="タスク" completed={true} onChange={onChange} />);

    const labelElement = screen.getByText('タスク');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveStyle({ textDecoration: 'line-through' });
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('タスク内容がクリックされたときに onChange が呼ばれる', async () => {
    const userEventObj = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(
      <Todo label="タスク" completed={false} onChange={onChange} />,
    );

    await userEventObj.click(screen.getByText('タスク'));
    expect(onChange).toHaveBeenCalledWith(true);

    rerender(<Todo label="タスク" completed={true} onChange={onChange} />);

    await userEventObj.click(screen.getByText('タスク'));
    expect(onChange).toHaveBeenCalledWith(false);
  });
});
