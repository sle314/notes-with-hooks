import React from 'react'
import { RouteComponentProps } from '@reach/router'

import Page from '../layout-components/Page'
import NoteList from '../components/NoteList'
import NoteModal from '../components/NoteModal'

interface Props {
  noteId?: number
  isEdit?: boolean
}

export const Notes: React.SFC<RouteComponentProps<Props>> = ({ noteId, isEdit = false }) => (
  <Page>
    <NoteList/>
    {noteId && <NoteModal isEdit={isEdit}/>}
  </Page>
)

export default Notes
