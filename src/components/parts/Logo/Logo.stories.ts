import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'blue',
      values: [
        {
          name: 'blue',
          value: '#09b8ff',
        },
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
