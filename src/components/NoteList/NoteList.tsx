import React, { useCallback } from 'react'
import { navigate } from '@reach/router'

import { useNotes } from '../../context'
import { Path } from '../../enums'
import NoteCard, { EmptyCard } from '../NoteCard'

import { Container, NoteCardWrapper } from './NoteList.styled'

export const NoteList: React.SFC = () => {
  const { notes, addInitial } = useNotes()

  const onEmptyCardClick = useCallback(async () => {
    const { id } = addInitial()
    await navigate(`${Path.Notes}${id}/edit/`)
  }, [addInitial])

  return (
    <Container>
      <EmptyCard onClick={onEmptyCardClick}/>
      {notes.map(({ id, source }) => (
        <NoteCardWrapper key={`note-${id}`} to={`${Path.Notes}${id}/`}>
          <NoteCard markdownSource={source}/>
        </NoteCardWrapper>
      ))}
    </Container>
  )
}
