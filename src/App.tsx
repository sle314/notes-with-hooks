import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import { AppProvider } from './context'
import Router from './Router'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.typography.font.primary};;
  }
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <GlobalStyle/>
      <AppProvider>
        <Router/>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
