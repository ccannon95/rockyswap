// NavBar.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import NavBar from './NavBar.vue'

const meta: Meta<typeof NavBar> = {
  title: 'Components/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  argTypes: {
    // You can wire events so they show in the "Actions" panel in Storybook
    onOpenApp: { action: 'open-app' },
    onConnect: { action: 'connect' },
  },
}

export default meta
type Story = StoryObj<typeof NavBar>

// Default story
export const Default: Story = {
  args: {
    // no props needed for now, but you could add some later if you expose any
  },
}
