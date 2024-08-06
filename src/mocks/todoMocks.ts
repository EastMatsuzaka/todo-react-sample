import { http, HttpResponse, delay } from 'msw';
import { TodoItem } from '@/states/todoAtom';

const todoListMockData: TodoItem[] = [
  { title: 'React setup', completed: true },
  { title: 'npm package upgrade', completed: false },
];

const get = http.get(`${import.meta.env.VITE_API_BASE_URL}/todo`, async () => {
  await delay(1000);
  return HttpResponse.json(todoListMockData);
});

export default {
  todoListMockData,
  get,
};
