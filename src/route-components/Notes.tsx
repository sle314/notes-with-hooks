import React from 'react'
import { RouteComponentProps } from '@reach/router'

interface Props {
  noteId?: number
  isEdit?: boolean
}

export const Notes: React.SFC<RouteComponentProps<Props>> = ({ noteId, isEdit = false }) => (
  <>Notes page ({ noteId }, { isEdit ? 'edit' : 'no' })</>
)

export default Notes
