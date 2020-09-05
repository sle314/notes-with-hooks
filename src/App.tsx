import React from 'react'
import { Reset } from 'styled-reset'

import Router from './Router'

const App: React.SFC = () => {
  return (
    <>
      <Reset/>
      <Router/>
    </>
  )
}

export default App
