import React, { MouseEvent } from 'react'

import Markdown from '../Markdown'
import { Container } from './NoteCard.styled'

interface Props {
  onClick: (event: MouseEvent) => void
}

export const NoteCard: React.SFC<Props> = ({ onClick, children }) => (
  <Container onClick={onClick}>
    <Markdown isSmall>{children}</Markdown>
  </Container>
)
