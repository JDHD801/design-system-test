import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'ARC/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'subtle'],
    },
    color: {
      control: 'select',
      options: ['primary', 'destructive', 'neutral', 'disabled'],
    },
    size: {
      control: 'select',
      options: ['regular', 'compact'],
    },
    leadingIcon: { control: false },
    iconOnly: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilledPrimary: Story = {
  args: { variant: 'filled', color: 'primary', size: 'regular', label: 'Button' },
};

export const FilledDestructive: Story = {
  args: { variant: 'filled', color: 'destructive', size: 'regular', label: 'Button' },
};

export const FilledNeutral: Story = {
  args: { variant: 'filled', color: 'neutral', size: 'regular', label: 'Button' },
};

export const FilledDisabled: Story = {
  args: { variant: 'filled', color: 'disabled', size: 'regular', label: 'Button' },
};

export const OutlinedPrimary: Story = {
  args: { variant: 'outlined', color: 'primary', size: 'regular', label: 'Button' },
};

export const OutlinedDestructive: Story = {
  args: { variant: 'outlined', color: 'destructive', size: 'regular', label: 'Button' },
};

export const OutlinedNeutral: Story = {
  args: { variant: 'outlined', color: 'neutral', size: 'regular', label: 'Button' },
};

export const SubtlePrimary: Story = {
  args: { variant: 'subtle', color: 'primary', size: 'regular', label: 'Button' },
};

export const SubtleDestructive: Story = {
  args: { variant: 'subtle', color: 'destructive', size: 'regular', label: 'Button' },
};

export const SubtleNeutral: Story = {
  args: { variant: 'subtle', color: 'neutral', size: 'regular', label: 'Button' },
};

export const CompactPrimary: Story = {
  args: { variant: 'filled', color: 'primary', size: 'compact', label: 'Button' },
};
