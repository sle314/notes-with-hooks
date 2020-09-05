import React from 'react'
import { RouteComponentProps } from '@reach/router'

import Page from '../layout-components/Page'
import NoteList from '../components/NoteList'

interface Props {
  noteId?: number
  isEdit?: boolean
}

export const Notes: React.SFC<RouteComponentProps<Props>> = ({ noteId, isEdit = false }) => (
  <Page>
    <NoteList/>
  </Page>
)

export default Notes
