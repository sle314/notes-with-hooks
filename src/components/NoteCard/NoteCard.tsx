import React from 'react'

import Markdown from '../Markdown'
import { Container } from './NoteCard.styled'

interface Props {
  markdownContent?: string
}

export const NoteCard: React.SFC<Props> = ({ markdownContent = '' }) => (
  <Container>
    <Markdown isSmall>{markdownContent}</Markdown>
  </Container>
)
