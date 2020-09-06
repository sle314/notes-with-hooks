import React, { createContext, useMemo, useState, useCallback } from 'react'

import { DEFAULT_NOTE_SOURCE  } from '../../constants'
import { Note } from '../../interfaces/note'

export interface ContextData {
  getAllIds: () => number[]
  get: (id: number) => Note | undefined
  save: (id: number, source: string) => Note | undefined
  add: (source: string) => Note
  addInitial: () => Note
  remove: (id: number) => void
}

const EMPTY_NOTE = { id: 0, source: '' }

export const Context = createContext<ContextData>({
  getAllIds: () => [],
  get: () => EMPTY_NOTE,
  save: () => EMPTY_NOTE,
  add: () => EMPTY_NOTE,
  addInitial: () => EMPTY_NOTE,
  remove: () => undefined,
})

export const NoteProvider: React.FC = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([])

  const getAllIds = useCallback(() => notes.map(({ id }) => id), [notes])
  const getNoteIndex = useCallback((noteId: number) => getAllIds().indexOf(noteId), [getAllIds])
  const maxId = useMemo<number>(() => Math.max(...getAllIds()), [getAllIds])
  const get = useCallback((noteId: number) => notes.find(({ id }) => id === noteId), [notes])
  const save = useCallback((noteId: number, source: string) => {
    const noteIndex = getNoteIndex(noteId)
    if (!noteIndex) {
      return undefined
    }
    const note = { id: noteId, source }
    setNotes(prevNotes => [
      ...prevNotes.slice(0, noteIndex),
      note,
      ...prevNotes.slice(noteIndex),
    ])
    return note
  }, [getNoteIndex, notes])
  const add = useCallback((source: string) => {
    const note = { id: maxId + 1, source }
    setNotes(prevNotes => [note, ...prevNotes])
    return note
  }, [])
  const addInitial = useCallback(() => add(DEFAULT_NOTE_SOURCE), [add])
  const remove = useCallback((noteId: number) => {
    const noteIndex = getNoteIndex(noteId)
    if (!noteIndex) {
      return
    }
    setNotes(prevNotes => [
      ...prevNotes.slice(0, noteIndex),
      ...prevNotes.slice(noteIndex),
    ])
  }, [getNoteIndex])

  const value = useMemo(() => ({
    getAllIds,
    get,
    save,
    add,
    addInitial,
    remove,
  }), [
    getAllIds,
    get,
    save,
    add,
    addInitial,
    remove,
  ])

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
