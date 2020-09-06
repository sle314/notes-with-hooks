import React, { useMemo, useEffect } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import NoteList from '../../components/NoteList'
import NoteModal from '../../components/NoteModal'
import { Path } from '../../enums'
import Page from '../../layout-components/Page'
import { useNotes } from '../../context'

interface Props {
  noteId?: string
  isEdit?: boolean
}

export const Notes: React.SFC<RouteComponentProps<Props>> = ({ noteId: noteIdProp, isEdit = false }) => {
  const noteId = useMemo<number | undefined>(() => (
    noteIdProp ? parseInt(noteIdProp, 10) : undefined
  ), [noteIdProp])
  const { get } = useNotes()

  // redirect to list if note does not exist
  useEffect(() => {
    if (noteId && !get(noteId)) {
      void navigate(Path.Notes)
    }
  }, [get, noteId])

  return (
    <Page>
      <NoteList/>
      <NoteModal isEdit={isEdit} noteId={noteId}/>
    </Page>
  )
}

export default Notes
