import { StatusDot } from '@/components';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/StatusDot',
  component: StatusDot,
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['success', 'error', 'processing', 'idle'],
      defaultValue: 'idle',
    },
    size: {
      control: 'number',
      defaultValue: 12,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    status: 'idle',
    size: 12,
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    size: 16,
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    size: 16,
  },
};

export const Processing: Story = {
  args: {
    status: 'processing',
    size: 16,
  },
};
