import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Bootstrap 5/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'dark', 'light', 'link'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    outline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leadingIcon: { control: false },
    iconOnly: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { type: 'primary', size: 'medium', label: 'Button' },
};

export const Secondary: Story = {
  args: { type: 'secondary', size: 'medium', label: 'Button' },
};

export const Danger: Story = {
  args: { type: 'danger', size: 'medium', label: 'Button' },
};

export const Success: Story = {
  args: { type: 'success', size: 'medium', label: 'Button' },
};

export const Warning: Story = {
  args: { type: 'warning', size: 'medium', label: 'Button' },
};

export const Info: Story = {
  args: { type: 'info', size: 'medium', label: 'Button' },
};

export const Dark: Story = {
  args: { type: 'dark', size: 'medium', label: 'Button' },
};

export const Light: Story = {
  args: { type: 'light', size: 'medium', label: 'Button' },
};

export const OutlinePrimary: Story = {
  args: { type: 'primary', outline: true, size: 'medium', label: 'Button' },
};

export const OutlineSecondary: Story = {
  args: { type: 'secondary', outline: true, size: 'medium', label: 'Button' },
};

export const OutlineDanger: Story = {
  args: { type: 'danger', outline: true, size: 'medium', label: 'Button' },
};

export const Large: Story = {
  args: { type: 'primary', size: 'large', label: 'Button' },
};

export const Small: Story = {
  args: { type: 'primary', size: 'small', label: 'Button' },
};

export const Disabled: Story = {
  args: { type: 'primary', size: 'medium', label: 'Button', disabled: true },
};
