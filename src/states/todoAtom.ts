import { atom } from 'jotai';
import { getTodoList } from '@/service/todoService';

export interface TodoItem {
  title: string;
  completed: boolean;
}

export const todoListAtom = atom<TodoItem[]>([]);
export const todoListAsyncAtom = atom(() => getTodoList());
