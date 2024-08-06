import { server } from '@/mocks/node';
import todoMocks from '@/mocks/todoMocks';
import { getTodoList } from './todoService';

describe('todoService', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  test('should return todo list', async () => {
    const todoList = await getTodoList();
    expect(todoList).toEqual(todoMocks.todoListMockData);
  });
});
