import { css } from '@emotion/css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Button, debounce, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Options } from 'prettier'
import typescript from 'prettier/parser-typescript'
import prettier from 'prettier/standalone'
import React, { ComponentType, FC, useMemo, useRef } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { createCookieHooker } from './cookieHook'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function BasicGrid() {
  return <Box sx={{ flexGrow: 1 }}></Box>
}

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

export type DemoProps = {
  container: ComponentType<any>
  typescript: string
  javascript: string
  codesandboxUrl: string
}

export const Demo: FC<Partial<DemoProps>> = (props) => {
  const _props: DemoProps = {
    container: () => <div>Render me</div>,
    javascript: `import React from 'react'

    const App = () => <div> 'hello world'</div>
    
    export default App
    `,
    typescript: `import React, { FC } from 'react'

    const App: FC = () => <div> 'hello world'</div>
    
    export default App
    `,
    codesandboxUrl: 'https://codesandbox.io',
    ...props,
  }
  const { container, typescript, javascript, codesandboxUrl } = _props

  const [language, setLanguage] = useRememberLanguage('ts')
  const [tabIdx, setTabIdx] = useRememberTabIdx(0)
  const [fontSize, setFontSize] = useRememberFontSize(10)
  const [printWidth, setPrintWidth] = useRememberWrapWidth(80)

  const format = useRef(
    debounce((source: string, options: Options) => prettier.format(source, options), 100)
  )

  const source = useMemo(() => {
    return prettier.format(language === 'ts' ? typescript : javascript, {
      ...PRETTIER_OPTS,
      printWidth,
    })
  }, [language, printWidth])

  return (
    <Tabs selectedIndex={tabIdx} onSelect={(idx) => setTabIdx(idx)}>
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code</Tab>
        <div
          className={css`
            padding: 2;
            border-radius: 5px;
            padding-left: 10px;
            padding-right: 10px;
            margin-left: 5px;
            display: inline-block;
            &:hover {
              cursor: pointer;
            }
            .MuiToggleButton {
              padding: 2px;
            }
          `}
        >
          <ToggleButtonGroup
            color="primary"
            value={language}
            exclusive
            onChange={(e, v) => {
              console.log({ v })
              setLanguage(v)
            }}
            size="small"
          >
            <ToggleButton
              value="js"
              style={{
                paddingTop: 4,
                paddingBottom: 0,
              }}
            >
              Js
            </ToggleButton>
            <ToggleButton
              value="ts"
              style={{
                paddingTop: 4,
                paddingBottom: 0,
              }}
            >
              Ts
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Button
          style={{
            padding: 2,
          }}
          onClick={() => window.open(codesandboxUrl, '_blank')}
        >
          <Typography>Run in Codesandbox</Typography>
        </Button>
      </TabList>

      <TabPanel>{React.createElement(container)}</TabPanel>
      <TabPanel>
        <Grid container>
          <Grid item xs={2}>
            <Item elevation={0}></Item>
          </Grid>

          <Grid item xs={4}>
            <Item elevation={0}>
              <div>
                <Typography>Font Size</Typography>
                <Slider
                  value={fontSize}
                  getAriaValueText={(v) => `${v}pt`}
                  step={1}
                  marks
                  min={8}
                  max={20}
                  valueLabelDisplay="auto"
                  onChange={(e, v) => setFontSize(v as number)}
                />
              </div>
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Item elevation={0}>
              <div>
                <Typography>Wrap Width</Typography>
                <Slider
                  value={printWidth}
                  getAriaValueText={(v) => `${v}pt`}
                  step={5}
                  marks
                  min={40}
                  max={200}
                  valueLabelDisplay="auto"
                  onChange={(e, v) => setPrintWidth(v as number)}
                />
              </div>
            </Item>
          </Grid>
        </Grid>

        <SyntaxHighlighter
          language="typescript"
          style={dark}
          showLineNumbers
          codeTagProps={{
            style: {
              fontSize: `${fontSize}pt`,
            },
          }}
        >
          {source}
        </SyntaxHighlighter>
      </TabPanel>
    </Tabs>
  )
}
