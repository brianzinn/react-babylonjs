import {
  OpenInCodeSandboxButton,
  useActiveCode,
  useTranspiledCode,
} from '@codesandbox/sandpack-react'
import { Runner } from './Runner/Runner'
import { extractRelativeImportsInfo } from './helpers/extractRelativeImportsInfo'
import { PlaygroundProps } from './Playground'

export const Preview = (props: PlaygroundProps) => {
  const { files, language } = props
  const { code } = useActiveCode()

  // console.log(files, { code })

  const relativeImports = extractRelativeImportsInfo(Object.values(files).join('\n'))

  // console.log({ code })

  return (
    <>
      <Runner language={language} code={code} />
      <div style={{ position: 'absolute', bottom: '8px', right: '8px' }}>
        <OpenInCodeSandboxButton />
      </div>
    </>
  )
}
