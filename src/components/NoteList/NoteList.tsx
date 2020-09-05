import React, { useCallback } from 'react'
import { navigate } from '@reach/router'

import NoteCard, { EmptyCard } from '../NoteCard'

import { Container } from './NoteList.styled'

export const NoteList: React.SFC = () => {
  const onCardClick = useCallback((noteId: number) => async () => {
    await navigate(`/${noteId}/`)
  }, [])

  const content = '# heading'

  return (
    <Container>
      <EmptyCard/>
      <NoteCard onClick={onCardClick(1)}>
        {content}
      </NoteCard>
    </Container>
  )
}
