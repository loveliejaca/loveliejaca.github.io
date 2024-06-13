import type { Meta, StoryObj } from '@storybook/react';
import Skills from './Skills';

const meta: Meta<typeof Skills> = {
  title: 'components/Skills',
  component: Skills,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Skills>;

export const Default: Story = {
  args: {},
};