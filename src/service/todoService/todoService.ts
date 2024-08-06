import { httpClient } from '../httpClient';
import { TodoItem } from '@/states/todoAtom';

export async function getTodoList() {
  const { data } = await httpClient.get<TodoItem[]>('/todo');
  return data;
}
