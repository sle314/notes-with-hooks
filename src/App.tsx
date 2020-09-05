import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'

import Router from './Router'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Merriweather', serif;
  }
`

const App: React.SFC = () => {
  return (
    <>
      <Reset/>
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App
