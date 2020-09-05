import React from 'react'
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown'

import { Container } from './Markdown.styled'

interface Props extends ReactMarkdownProps {
  isSmall?: boolean
}

export const Markdown: React.SFC<Props> = ({ children, isSmall = false, ...rest }) => (
  <Container isSmall={isSmall}>
    <ReactMarkdown {...rest}>{children}</ReactMarkdown>
  </Container>
)
