import React from 'react'

import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'

export const Layout: React.FC = ({ children }) => (
  <>
    <Header/>
    <Main>{children}</Main>
    <Footer/>
  </>
)
