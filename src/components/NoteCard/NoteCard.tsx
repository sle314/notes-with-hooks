import React, { useMemo } from 'react'

import { useNotes } from '../../context'
import { Path } from '../../enums'
import Card from '../Card'
import Markdown from '../Markdown'

import { Link } from './NoteCard.styled'

interface Props {
  noteId: number
}

export const NoteCard: React.FC<Props> = ({ noteId }) => {
  const { get } = useNotes()

  const note = useMemo(() => get(noteId), [get, noteId])

  return note ? (
    <Link to={`${Path.Notes}${noteId}/`}>
      <Card>
        <Markdown isSmall>{note.source}</Markdown>
      </Card>
    </Link>
  ) : null
}
