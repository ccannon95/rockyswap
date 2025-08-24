// src/components/taskbar/Taskbar.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import TaskBar from '@/pages/components/taskbar/TaskBar.vue'

const meta: Meta<typeof TaskBar> = {
  title: 'Taskbar/Taskbar', // how it shows up in the left panel
  component: TaskBar,
  tags: ['autodocs'],        // enables auto-generated docs
}
export default meta

type Story = StoryObj<typeof TaskBar>

export const Default: Story = {
  render: () => ({
    components: { TaskBar },
    template: '<TaskBar />',
  }),
}
