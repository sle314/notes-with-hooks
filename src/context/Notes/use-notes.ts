import { useContext } from 'react'

import { ContextData, Context } from './NoteProvider'

export const useNotes = () => useContext<ContextData>(Context)
