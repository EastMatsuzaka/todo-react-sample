import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Todo } from './Todo';

const meta: Meta<typeof Todo> = {
  component: Todo,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof Todo>;

export const Uncompleted: Story = {
  args: {
    completed: false,
    label: 'Todo Task',
    onChange: action('onClick'),
  },
};

export const Completed: Story = {
  args: {
    completed: true,
    label: 'Todo Task',
    onChange: action('onClick'),
  },
};

export const LongTaskLabel: Story = {
  args: {
    completed: false,
    label:
      '長いタスク長いタスク長いタスク長いタスク長いタスク長いタスク長いタスク長いタスク',
    onChange: action('onClick'),
  },
};
