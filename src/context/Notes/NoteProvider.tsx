import React, { createContext, useMemo } from 'react'

export interface ContextData {

}

export const Context = createContext<ContextData>({})

export const NoteProvider: React.FC = ({ children }) => {

  const value = useMemo(() => ({

  }), [])

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
