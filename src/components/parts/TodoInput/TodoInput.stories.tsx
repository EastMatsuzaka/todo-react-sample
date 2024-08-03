import type { Meta, StoryObj } from '@storybook/react';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';
import { TodoInput } from './TodoInput';
import { TestJotaiProvider } from '@/test-utils';
import { todoListAtom } from '@/states/todoAtom';

const meta: Meta<typeof TodoInput> = {
  component: TodoInput,
};
export default meta;

type Story = StoryObj<typeof TodoInput>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <TestJotaiProvider initialValues={[[todoListAtom, []]]}>
        <DevTools />
        <Story />
      </TestJotaiProvider>
    ),
  ],
};
