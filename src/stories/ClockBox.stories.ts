import ClockBox from "@/pages/components/taskbar/ClockBox.vue";
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof ClockBox> = {
  title: 'Taskbar/ClockBox', // how it shows up in the left panel
  component: ClockBox,
  tags: ['autodocs'],        // enables auto-generated docs
}
export default meta

type Story = StoryObj<typeof ClockBox>

export const Default: Story = {
  render: () => ({
    components: { ClockBox },
    template: '<ClockBox />',
  }),
}
