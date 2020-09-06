import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import Router from './Router'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.typography.font.primary};;
  }
`

const App: React.SFC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <GlobalStyle/>
      <Router/>
    </ThemeProvider>
  )
}

export default App
