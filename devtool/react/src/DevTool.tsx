import { css } from '@emotion/css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Options } from 'prettier'
import typescript from 'prettier/parser-typescript'
import prettier from 'prettier/standalone'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import React, { ComponentType, FC, useMemo, useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Modal from 'react-bootstrap/Modal'
import { FaCog } from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { DevtoolLoaderResult } from '../../loader/dist'
import { createCookieHooker } from './cookieHook'
const plugins = [typescript]

const PRETTIER_OPTS: Options = {
  parser: 'typescript',
  plugins,
  singleQuote: true,
  semi: false,
  printWidth: 100,
  jsxBracketSameLine: false,
  tabWidth: 2,
  trailingComma: 'es5',
}

const useRememberFontSize = createCookieHooker<number>('fontsize')
const useRememberTabIdx = createCookieHooker<number>('tabidx')
const useRememberLanguage = createCookieHooker<'ts' | 'js'>('language')
const useRememberWrapWidth = createCookieHooker<number>('wrapwidth')

const IS_DEVELOPMENT_MODE = process.env.NODE_ENV === 'development'

export type DevToolProps = {
  component: ComponentType<any>
  meta: DevtoolLoaderResult
  prefix: string
}

export const DevTool: FC<Partial<DevToolProps>> = (props) => {
  const _props: DevToolProps = {
    component: () => <div>Render me</div>,
    meta: {
      js: `import React from 'react'

      const App = () => <div> 'hello world'</div>
      
      export default App
      `,
      ts: `import React, { FC } from 'react'
  
      const App: FC = () => <div> 'hello world'</div>
      
      export default App
      `,
      tsUrl: 'https://codesandbox.io',
      jsUrl: 'https://codesandbox.io',
    },
    prefix: '',
    ...props,
  }
  const { component, meta, prefix } = _props

  const { js, ts, jsUrl, tsUrl } = meta

  const [language, setLanguage] = useRememberLanguage('ts')
  const [tabIdx, setTabIdx] = useRememberTabIdx(0, prefix)
  const [fontSize, setFontSize] = useRememberFontSize(10)
  const [printWidth, setPrintWidth] = useRememberWrapWidth(80)
  const [showSettings, setShowSettings] = useState(false)

  const source = useMemo(() => {
    return prettier.format(language === 'ts' ? ts : js, {
      ...PRETTIER_OPTS,
      printWidth,
    })
  }, [language, printWidth, js, ts])

  return (
    <div>
      <Tabs selectedIndex={tabIdx} onSelect={(idx) => setTabIdx(idx)}>
        <TabList>
          <Tab>Output</Tab>
          <Tab>Code</Tab>
          <div
            className={css`
              padding: 2;
              border-radius: 5px;
              padding-left: 10px;
              padding-right: 10px;
              margin-left: 5px;
              display: inline-block;
            `}
          >
            <ButtonGroup aria-label="Basic example" size="sm">
              <Button
                variant={language === 'js' ? 'primary' : 'secondary'}
                onClick={() => setLanguage('js')}
              >
                Js
              </Button>
              <Button
                variant={language === 'ts' ? 'primary' : 'secondary'}
                onClick={() => setLanguage('ts')}
              >
                Ts
              </Button>
            </ButtonGroup>
          </div>
          <Button
            size="sm"
            onClick={() => window.open(language === 'ts' ? tsUrl : jsUrl, '_blank')}
          >
            Run in Codesandbox
          </Button>
          <Button
            size="sm"
            className={css`
              margin-left: 5px;
            `}
            onClick={() => setShowSettings(true)}
          >
            <FaCog />
          </Button>
        </TabList>

        <TabPanel>{React.createElement(component)}</TabPanel>
        <TabPanel>
          <SyntaxHighlighter
            language="typescript"
            style={dark}
            showLineNumbers
            customStyle={{
              backgroundColor: 'black',
              border: '1px solid gray',
            }}
            codeTagProps={{
              style: {
                fontSize: `${fontSize}pt`,
                backgroundColor: 'black',
              },
            }}
          >
            {source}
          </SyntaxHighlighter>
        </TabPanel>
      </Tabs>
      <Modal show={showSettings} onHide={() => setShowSettings(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editor Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className={css`
              width: 200px;
              display: inline-block;
              padding: 5px;
              margin: 5px;
            `}
          >
            Font Size
            <Slider
              value={fontSize}
              step={1}
              min={8}
              max={20}
              dots
              onChange={(v) => setFontSize(v as number)}
            />
          </div>
          <div
            className={css`
              width: 400px;
              display: inline-block;
              padding: 5px;
              margin: 5px;
            `}
          >
            Wrap Width
            <Slider
              value={printWidth}
              step={5}
              min={40}
              max={200}
              dots
              onChange={(v) => setPrintWidth(v as number)}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
