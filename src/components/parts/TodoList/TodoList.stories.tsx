import type { Meta, StoryObj } from '@storybook/react';
import { TodoItem, todoListAtom } from '@/states/todoAtom';
import { TestJotaiProvider } from '@/test-utils';
import { TodoList } from './TodoList';

const meta: Meta<typeof TodoList> = {
  component: TodoList,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof TodoList>;

const todoListInitialValues: TodoItem[] = [
  { title: 'Todo Task 1', completed: false },
  { title: 'Todo Task 2', completed: true },
  { title: 'Todo Task 3', completed: false },
  { title: 'Todo Task 4', completed: true },
  { title: 'Todo Task 5', completed: false },
  { title: 'Todo Task 6', completed: true },
  { title: 'Todo Task 7', completed: false },
  { title: 'Todo Task 8', completed: true },
  { title: 'Todo Task 9', completed: false },
  { title: 'Todo Task 10', completed: true },
];

export const SingleItem: Story = {
  decorators: [
    (Story) => (
      <TestJotaiProvider
        initialValues={[[todoListAtom, [todoListInitialValues[0]]]]}
      >
        <Story />
      </TestJotaiProvider>
    ),
  ],
};

export const MultiItem: Story = {
  decorators: [
    (Story) => (
      <TestJotaiProvider
        initialValues={[[todoListAtom, todoListInitialValues]]}
      >
        <Story />
      </TestJotaiProvider>
    ),
  ],
};

export const NoData: Story = {
  decorators: [
    (Story) => (
      <TestJotaiProvider initialValues={[]}>
        <Story />
      </TestJotaiProvider>
    ),
  ],
};
