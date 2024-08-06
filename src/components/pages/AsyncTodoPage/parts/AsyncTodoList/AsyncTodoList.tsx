import { useAtom } from 'jotai';
import { Stack, Text } from '@mantine/core';
import { todoListAsyncAtom } from '@/states/todoAtom';
import { Todo } from '@/components/pages/TodoPage/parts/Todo';

export function AsyncTodoList() {
  const [todoList] = useAtom(todoListAsyncAtom);

  if (!todoList || todoList.length === 0) {
    return <Text>タスクがありません</Text>;
  }

  return (
    <Stack>
      {todoList.map((todo, index) => (
        <Todo
          key={index}
          label={todo.title}
          completed={todo.completed}
          onChange={(checked) => {
            alert('未実装');
          }}
        />
      ))}
    </Stack>
  );
}
