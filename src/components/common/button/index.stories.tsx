import { Button } from './index';
import '@/App.css';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'secondary', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'tag'],
    },
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
  render: (props) => (
    <div style={{ width: '120px' }}>
      <Button {...props} />
    </div>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼 스토리
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
};

// 파괴적 버튼(Destructive) 스토리
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Delete',
  },
};

// 두 번째 변형 버튼
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary',
  },
};

// 고스트 버튼(Ghost) 스토리
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost',
  },
};

export const Icon: Story = {
  args: {
    size: 'tag',
    variant: 'secondary',
    children: '스포츠',
  },
};
