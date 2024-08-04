import { render, screen } from '@/test-utils';
import { TodoPage } from './TodoPage';
import * as TodoInput from './parts/TodoInput';
import * as TodoList from './parts/TodoList';

describe(TodoPage, () => {
  test('TodoInput と TodoList が表示される', () => {
    const todoInputSpy = vi.spyOn(TodoInput, 'TodoInput');
    todoInputSpy.mockReturnValue(<div>TodoInput</div>);
    const todoListSpy = vi.spyOn(TodoList, 'TodoList');
    todoListSpy.mockReturnValue(<div>TodoList</div>);

    render(<TodoPage />);

    expect(screen.getByText('TodoInput')).toBeInTheDocument();
    expect(screen.getByText('TodoList')).toBeInTheDocument();
  });
});
