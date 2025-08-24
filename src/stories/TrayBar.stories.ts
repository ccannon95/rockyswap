import TrayBar from "@/pages/components/taskbar/TrayBar.vue";
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof TrayBar> = {
  title: 'Taskbar/TrayBar', // how it shows up in the left panel
  component: TrayBar,
  tags: ['autodocs'],        // enables auto-generated docs
}
export default meta

type Story = StoryObj<typeof TrayBar>

export const Default: Story = {
  render: () => ({
    components: { TrayBar },
    template: '<TrayBar />',
  }),
}
