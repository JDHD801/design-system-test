import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Alert } from './Alert';

const meta = {
  title: 'Bootstrap 5/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    dismissible: { control: 'boolean' },
  },
  args: { onDismiss: fn() },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { type: 'primary', message: 'A simple primary alert—check it out!' },
};

export const Secondary: Story = {
  args: { type: 'secondary', message: 'A simple secondary alert—check it out!' },
};

export const Success: Story = {
  args: { type: 'success', message: 'A simple success alert—check it out!' },
};

export const Danger: Story = {
  args: { type: 'danger', message: 'A simple danger alert—check it out!' },
};

export const Warning: Story = {
  args: { type: 'warning', message: 'A simple warning alert—check it out!' },
};

export const Info: Story = {
  args: { type: 'info', message: 'A simple info alert—check it out!' },
};

export const Light: Story = {
  args: { type: 'light', message: 'A simple light alert—check it out!' },
};

export const Dark: Story = {
  args: { type: 'dark', message: 'A simple dark alert—check it out!' },
};

export const Dismissible: Story = {
  args: { type: 'primary', message: 'A dismissible alert—check it out!', dismissible: true },
};
