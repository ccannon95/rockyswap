import TitleBar from "@/pages/components/mediumbits/TitleBar.vue";
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof TitleBar> = {
  title: 'ViewContainer/TitleBar', // how it shows up in the left panel
  component: TitleBar,
  tags: ['autodocs'],        // enables auto-generated docs
}
export default meta

type Story = StoryObj<typeof TitleBar>

export const Default: Story = {
  render: () => ({
    components: { TitleBar },
    template: '<TitleBar />',
  }),
}
