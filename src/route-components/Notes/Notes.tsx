import React from 'react'
import { RouteComponentProps } from '@reach/router'

import NoteList from '../../components/NoteList'
import NoteModal from '../../components/NoteModal'
import Page from '../../layout-components/Page'

interface Props {
  noteId?: number
  isEdit?: boolean
}

export const Notes: React.SFC<RouteComponentProps<Props>> = ({ noteId, isEdit = false }) => (
  <Page>
    <NoteList/>
    <NoteModal isEdit={isEdit} noteId={noteId}/>
  </Page>
)

export default Notes
