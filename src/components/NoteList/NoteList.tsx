import React, { useCallback, useMemo } from 'react'
import { navigate } from '@reach/router'

import { useNotes } from '../../context'
import { Path } from '../../enums'
import { EmptyCard } from '../Card'
import NoteCard from '../NoteCard'

import { Container } from './NoteList.styled'

export const NoteList: React.FC = () => {
  const { getAllIds, addInitial } = useNotes()

  const noteIds = useMemo(() => getAllIds(), [getAllIds])

  const onEmptyCardClick = useCallback(async () => {
    const { id } = addInitial()
    await navigate(`${Path.Notes}${id}/edit/`)
  }, [addInitial])

  return (
    <Container>
      <EmptyCard onClick={onEmptyCardClick}/>
      {noteIds.map(noteId => <NoteCard key={`note-${noteId}`} noteId={noteId}/>)}
    </Container>
  )
}
