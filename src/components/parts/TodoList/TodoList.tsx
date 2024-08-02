import { useAtom } from 'jotai';
import { Stack, Text } from '@mantine/core';
import { todoListAtom } from '@/states/todoAtom';
import { Todo } from '../Todo';

export function TodoList() {
  const [todoList, setTodoList] = useAtom(todoListAtom);

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
          onChange={(checked) =>
            setTodoList((prev) =>
              prev.map((prevItem, prevIdex) =>
                prevIdex === index
                  ? { ...prevItem, completed: checked }
                  : prevItem,
              ),
            )
          }
        />
      ))}
    </Stack>
  );
}
