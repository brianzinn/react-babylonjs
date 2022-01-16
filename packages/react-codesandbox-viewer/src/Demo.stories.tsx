import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import App from './App'
import { Demo } from './Demo'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Demo',
  component: Demo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Demo>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Demo> = (args) => <Demo {...args} />

export const Primary = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  container: App,
  typescript: `import React, { FC } from 'react'

  const App: FC = () => <div> 'hello world'</div>
  
  export default App
  `,
}
