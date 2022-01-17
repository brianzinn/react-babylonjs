/**
 * @jest-environment node
 */
import compiler from './compiler'

test('Gets devtool result', async () => {
  const stats = await compiler('../codesandbox-templates/ts/src/App.tsx')
  const output = stats?.toJson({ source: true }).modules?.[0].source?.toString() || ''
  expect(output).toMatchSnapshot()
})
