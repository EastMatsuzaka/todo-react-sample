import { useAtom } from 'jotai';
import { todoListAtom } from '@/states/todoAtom';
import { TextInput, Button, Group } from '@mantine/core';
import { useForm, isNotEmpty, hasLength } from '@mantine/form';

interface TodoInputForm {
  title: string;
}

export function TodoInput() {
  const [, setTodoList] = useAtom(todoListAtom);
  const form = useForm<TodoInputForm>({
    mode: 'uncontrolled',
    initialValues: { title: '' },
    validate: {
      // タイトルは必須かつ 20 文字以内
      title: (value) =>
        isNotEmpty('タスクを入力してください')(value) ||
        hasLength({ max: 20 }, 'タスクは 20 文字以内で入力してください')(value),
    },
  });

  const onSubmit = ({ title }: TodoInputForm) => {
    setTodoList((prev) => [...prev, { title, completed: false }]);
    form.reset();
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Group align="flex-start">
        <TextInput
          key={form.key('title')}
          {...form.getInputProps('title')}
          placeholder="タスクを入力"
        />
        <Button type="submit">追加</Button>
      </Group>
    </form>
  );
}
