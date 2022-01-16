//@ts-ignore
import SampleTs from '!!raw-loader!./Sample.tsx'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Demo } from './DevTool'
import Sample from './Sample'

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
  prefix: `g${+new Date()}`,
  isDevelopmentMode: true,
  component: Sample,
  typescript: SampleTs,
}
