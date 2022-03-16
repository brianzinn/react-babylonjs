import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import * as React from 'react'
import { styles } from '../../custom/styles/styles'
import Header from '../Header'
import { baseStyles } from '../styles/GlobalStyles'
import { darkTheme, lightTheme } from './index'

class ThemeProvider extends React.Component {
  state = {
    isDarkThemeActive: false,
  }

  componentDidMount() {
    this.retrieveActiveTheme()
  }

  retrieveActiveTheme = () => {
    const isDarkThemeActive = JSON.parse(window.localStorage.getItem('isDarkThemeActive'))

    this.setState({ isDarkThemeActive })
  }

  toggleActiveTheme = () => {
    this.setState((prevState) => ({ isDarkThemeActive: !prevState.isDarkThemeActive }))

    window.localStorage.setItem('isDarkThemeActive', JSON.stringify(!this.state.isDarkThemeActive))
  }

  render() {
    const { children, location } = this.props

    const { isDarkThemeActive } = this.state

    const currentActiveTheme = isDarkThemeActive ? darkTheme : lightTheme

    return (
      <div>
        <Global styles={[baseStyles, ...styles]} />
        <Header
          location={location}
          isDarkThemeActive={isDarkThemeActive}
          toggleActiveTheme={this.toggleActiveTheme}
        />
        <EmotionThemeProvider theme={currentActiveTheme}>{children}</EmotionThemeProvider>
      </div>
    )
  }
}

export default ThemeProvider
