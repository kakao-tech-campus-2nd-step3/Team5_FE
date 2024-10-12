import { Avatar, AvatarImage, AvatarFallback } from './index';
import '@/App.css';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

// 기본 Avatar 스토리
export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='https://via.placeholder.com/150' alt='User Avatar' />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '기본 Avatar 컴포넌트입니다. 이미지가 로드되지 않으면 대체 텍스트가 표시됩니다.',
      },
    },
  },
};

// 대체 텍스트가 있는 Avatar 스토리
export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='' alt='User Avatar' />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '이미지가 로드되지 않을 때 대체 텍스트가 표시되는 Avatar 컴포넌트입니다.',
      },
    },
  },
};

// 커스터마이즈된 Avatar 스토리
export const CustomAvatar: Story = {
  render: () => (
    <Avatar className='h-16 w-16'>
      <AvatarImage src='https://via.placeholder.com/150' alt='User Avatar' />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: '크기를 조정한 Avatar 컴포넌트입니다.',
      },
    },
  },
};
