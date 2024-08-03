import { render, screen, userEvent } from '@/test-utils';
import { TodoInput } from './TodoInput';
import { todoListAtom } from '@/states/todoAtom';
import '@/extensions/Array.extensions';
import { useAtom } from 'jotai';

function TodoInputWrapper() {
  const [todoList] = useAtom(todoListAtom);
  return (
    <>
      <TodoInput />
      {todoList.map((todo, index) => (
        <div key={index}>{todo.title}</div>
      ))}
    </>
  );
}

describe(TodoInput, () => {
  test('入力フォームが表示される', () => {
    render(<TodoInputWrapper />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('入力フォーム未入力時にバリデーションエラーとなる', async () => {
    render(<TodoInputWrapper />);

    const input = screen.getByRole('textbox');
    await userEvent.clear(input);
    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(screen.queryByText('タスクを入力してください')).toBeInTheDocument();

    // スペース入力でもエラーとなる
    await userEvent.type(input, ' 　');
    await userEvent.click(button);
    expect(screen.queryByText('タスクを入力してください')).toBeInTheDocument();
  });

  test('入力フォームに 21 文字以上入力時にバリデーションエラーとなる', async () => {
    render(<TodoInputWrapper />);

    const input = screen.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, '123456789012345678901');
    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(
      screen.queryByText('タスクは 20 文字以内で入力してください'),
    ).toBeInTheDocument();
  });

  test.each([['タスク'], ['12345678901234567890']])(
    '入力フォームに "%s" を入力して追加ボタンをクリックするとタスクが追加される',
    async (inputValue: string) => {
      render(<TodoInputWrapper />);

      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button');

      await userEvent.type(input, inputValue);
      await userEvent.click(button);

      expect(await screen.findByText(inputValue)).toBeInTheDocument();
      // 入力フォームがクリアされていること
      expect(await screen.findByRole('textbox')).toHaveValue('');
    },
  );

  test('入力フォームに入力し、エンターキーでタスクが追加される', async () => {
    render(<TodoInputWrapper />);

    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'task');
    await userEvent.type(input, '{enter}');

    expect(await screen.findByText('task')).toBeInTheDocument();
    // 入力フォームがクリアされていること
    expect(await screen.findByRole('textbox')).toHaveValue('');
  });
});
