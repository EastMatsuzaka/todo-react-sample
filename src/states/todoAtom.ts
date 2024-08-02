import { atom } from 'jotai';

export interface TodoItem {
  title: string;
  completed: boolean;
}

export const todoListAtom = atom<TodoItem[]>([]);
