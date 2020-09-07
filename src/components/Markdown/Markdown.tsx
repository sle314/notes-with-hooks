import React, { forwardRef, PropsWithChildren } from 'react'
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown'

import { Container } from './Markdown.styled'

interface Props extends ReactMarkdownProps {
  isSmall?: boolean
}

export const Markdown = forwardRef<HTMLDivElement, PropsWithChildren<Props>>((
  { children, isSmall = false, ...rest }, ref,
) => (
  <Container isSmall={isSmall} ref={ref}>
    <ReactMarkdown {...rest}>{children}</ReactMarkdown>
  </Container>
))
