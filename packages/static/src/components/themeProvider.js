import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import * as React from 'react'
import Header from './Header'
import { default as defaultTheme } from './theme'

export default function ThemeProvider({ children, theme = {}, location }) {
  return (
    <div>
      <Header location={location} />
      <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>{children}</EmotionThemeProvider>
    </div>
  )
}
