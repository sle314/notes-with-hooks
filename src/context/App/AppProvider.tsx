import React from 'react'

import { NoteProvider } from '../Notes'

export const AppProvider: React.FC = ({ children }) => (
  <NoteProvider>{children}</NoteProvider>
)
