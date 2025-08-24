import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonBox from '@/pages/components/tinybits/ButtonsBox.vue'

const meta: Meta<typeof ButtonBox> = {
  title: 'Components/ButtonBox',
  component: ButtonBox,
  argTypes: {
    standard: { control: 'boolean' },
    minimize: { control: 'boolean' },
    maximize: { control: 'boolean' },
    close: { control: 'boolean' },
    help: { control: 'boolean' },
    sysMenu: { control: 'boolean' },
    resize: { control: 'boolean' },
    pin: { control: 'boolean' },
    expand: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof ButtonBox>

// Default: show nothing until toggled on
export const Playground: Story = {
  args: {
    standard: false,
    standardtwo: false,
    minimize: false,
    maximize: false,
    close: false,
    help: false,
    sysMenu: false,
    resize: false,
    pin: false,
    expand: false,
  },
}

// Preset showing the common window controls
export const WindowControls: Story = {
  args: {
    minimize: true,
    maximize: true,
    close: true,
  },
}

// Preset showing ALL buttons
export const AllButtons: Story = {
  args: {
    standard: true,
    minimize: true,
    maximize: true,
    close: true,
    help: true,
    sysMenu: true,
    resize: false,
    pin: true,
    expand: true,
    standardtwo: true,
  },
}
