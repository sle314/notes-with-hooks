import React from 'react'

import NoteCard from '../NoteCard'

import { Container } from './NoteList.styled'

export const NoteList: React.SFC = () => (
  <Container>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
  </Container>
)
