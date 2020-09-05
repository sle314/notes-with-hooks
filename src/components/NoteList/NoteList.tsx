import React, { useCallback } from 'react'
import { navigate } from '@reach/router'

import NoteCard, { EmptyCard } from '../NoteCard'

import { Container } from './NoteList.styled'

export const NoteList: React.SFC = () => {
  const onCardClick = useCallback((noteId: number) => async () => {
    await navigate(`/${noteId}/`)
  }, [])

  const content = 'This is a note\n==============\n\nSubtitle\n--------\n\n\nShopping list:\n\n1. apples\n2. oranges\n3. toilet paper'

  return (
    <Container>
      <EmptyCard/>
      <NoteCard onClick={onCardClick(1)} markdownContent={content}/>
    </Container>
  )
}
