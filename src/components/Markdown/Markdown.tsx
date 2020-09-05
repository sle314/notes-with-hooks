import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Container } from './Markdown.styled'

interface Props {
  isSmall?: boolean
}

export const Markdown: React.SFC<Props> = ({ children, isSmall = false }) => (
  <Container isSmall={isSmall}>
    <ReactMarkdown>{children}</ReactMarkdown>
  </Container>
)
