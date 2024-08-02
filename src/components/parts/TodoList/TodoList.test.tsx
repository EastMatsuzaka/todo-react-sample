import { render, screen, userEvent, TestJotaiProvider } from '@/test-utils';
import { TodoList } from './TodoList';
import { todoListAtom } from '@/states/todoAtom';
import '@/extensions/Array.extensions';

describe(TodoList, () => {
  test('タスクが存在しない場合に存在しない旨のテキストが表示される', () => {
    render(
      <TestJotaiProvider initialValues={[]}>
        <TodoList />
      </TestJotaiProvider>,
    );

    expect(screen.getByText('タスクがありません')).toBeInTheDocument();
  });

  test('タスクが存在する場合にタスクが表示される', () => {
    const todoListInitialValues = [
      { title: 'Todo Task 1', completed: false },
      { title: 'Todo Task 2', completed: true },
      { title: 'Todo Task 3', completed: false },
      { title: 'Todo Task 4', completed: true },
      { title: 'Todo Task 5', completed: false },
      { title: 'Todo Task 6', completed: true },
      { title: 'Todo Task 7', completed: false },
      { title: 'Todo Task 8', completed: true },
      { title: 'Todo Task 9', completed: false },
      { title: 'Todo Task 10', completed: true },
    ];
    render(
      <TestJotaiProvider
        initialValues={[[todoListAtom, todoListInitialValues]]}
      >
        <TodoList />
      </TestJotaiProvider>,
    );

    todoListInitialValues.forEach((todo) => {
      const checkbox = screen.getByRole('checkbox', { name: todo.title });
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveProperty('checked', todo.completed);
    });
  });

  test('タスクがクリックされたときに完了状態が変更される', async () => {
    const todoListInitialValues = [
      { title: 'Todo Task 1', completed: false },
      { title: 'Todo Task 2', completed: true },
      { title: 'Todo Task 3', completed: false },
      { title: 'Todo Task 4', completed: true },
      { title: 'Todo Task 5', completed: false },
      { title: 'Todo Task 6', completed: true },
      { title: 'Todo Task 7', completed: false },
      { title: 'Todo Task 8', completed: true },
      { title: 'Todo Task 9', completed: false },
      { title: 'Todo Task 10', completed: true },
    ];
    render(
      <TestJotaiProvider
        initialValues={[[todoListAtom, todoListInitialValues]]}
      >
        <TodoList />
      </TestJotaiProvider>,
    );

    await todoListInitialValues.forEachAsync(async (todo) => {
      const checkbox = screen.getByRole('checkbox', { name: todo.title });
      await userEvent.click(checkbox);
      expect(checkbox).toHaveProperty('checked', !todo.completed);
    });
  });
});
