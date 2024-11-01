import { Input } from './index';
import '@/App.css';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'search'], // 다양한 input 타입
      description: 'Input 필드의 타입을 지정합니다.',
      table: {
        type: { summary: 'text | search' },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Input 필드의 플레이스홀더 텍스트입니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Input 필드를 비활성화할지 여부를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Input에 추가적인 클래스 네임을 전달할 수 있습니다.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

// 기본 Input 스토리
export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 텍스트 입력 필드입니다.',
      },
    },
  },
};

// 검색 필드
export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
  parameters: {
    docs: {
      description: {
        story: '검색을 위한 입력 필드입니다.',
      },
    },
  },
};
