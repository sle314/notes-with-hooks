import React from 'react'

import Markdown from '../Markdown'
import { Container } from './NoteCard.styled'

interface Props {
  markdownSource?: string
}

export const NoteCard: React.SFC<Props> = ({ markdownSource = '' }) => (
  <Container>
    <Markdown isSmall>{markdownSource}</Markdown>
  </Container>
)
