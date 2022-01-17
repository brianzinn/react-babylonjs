//@ts-ignore
import SampleTs from '!!raw-loader!./Sample.tsx'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { DevToolProps } from '.'
import { DevTool } from './DevTool'
import Sample from './Sample'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DevTool',
  component: DevTool,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DevTool>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DevTool> = (args) => <DevTool {...args} />

export const Primary = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
const args: DevToolProps = {
  prefix: `g${+new Date()}`,
  isDevelopmentMode: true,
  component: Sample,
  typescript: SampleTs,
  javascript: SampleTs,
  codesandboxJsUrl: 'https://codesandbox.io',
  codesandboxTsUrl: 'https://codesandbox.io',
}

Primary.args = args
