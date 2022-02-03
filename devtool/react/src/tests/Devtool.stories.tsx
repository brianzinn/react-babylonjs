//@ts-ignore
import devtoolResult from '!!@devtool/loader!./Sample.tsx'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { DevTool, DevToolProps } from '../DevTool'
import Sample from './Sample'

const settings: ComponentMeta<typeof DevTool> = {
  title: 'DevTool',
  component: DevTool,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default settings

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DevTool> = (args) => <DevTool {...args} />

export const Primary = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
const args: DevToolProps = {
  prefix: `g${+new Date()}`,
  component: Sample,
  meta: devtoolResult,
}

Primary.args = args
