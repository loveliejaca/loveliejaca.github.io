import type { Meta, StoryObj } from '@storybook/react';
import ContactUs from './ContactUs';

const meta: Meta<typeof ContactUs> = {
  title: 'components/ContactUs',
  component: ContactUs,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ContactUs>;

export const Default: Story = {
  args: {},
};