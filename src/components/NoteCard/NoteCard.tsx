import React, { MouseEvent } from 'react'

import Markdown from '../Markdown'
import { Container } from './NoteCard.styled'

interface Props {
  markdownContent?: string
  onClick: (event: MouseEvent) => void
}

export const NoteCard: React.SFC<Props> = ({ onClick, markdownContent = '' }) => (
  <Container onClick={onClick}>
    <Markdown isSmall>{markdownContent}</Markdown>
  </Container>
)
