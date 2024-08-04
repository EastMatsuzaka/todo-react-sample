import { Stack } from '@mantine/core';
import { TodoInput } from './parts/TodoInput';
import { TodoList } from './parts/TodoList';

export function TodoPage() {
  return (
    <Stack>
      <TodoInput />
      <TodoList />
    </Stack>
  );
}
