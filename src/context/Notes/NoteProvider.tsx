import React, { createContext, useMemo, useState, useCallback, useEffect, useRef } from 'react'

import { DEFAULT_NOTE_SOURCE } from '../../constants'
import { Note } from '../../interfaces/note'
import { getNotes, storeNotes } from '../../utils'

export interface ContextData {
  getAllIds: () => number[]
  get: (id: number) => Note | undefined
  save: (id: number, source: string) => Note | undefined
  add: (source: string) => Note
  addInitial: () => Note
  remove: (id: number) => boolean
}

const EMPTY_NOTE = { id: 0, source: '' }

export const Context = createContext<ContextData>({
  getAllIds: () => [],
  get: () => EMPTY_NOTE,
  save: () => EMPTY_NOTE,
  add: () => EMPTY_NOTE,
  addInitial: () => EMPTY_NOTE,
  remove: () => false,
})

export const NoteProvider: React.FC = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>(getNotes())

  useEffect(() => {
    setNotes(getNotes())
  }, [])

  const prevNotes = useRef<Note[]>()
  useEffect(() => {
    // if notes change (but not initially), store them to localStorage
    if (prevNotes.current !== undefined && prevNotes.current !== notes) {
      storeNotes(notes)
    }
    prevNotes.current = notes
  }, [notes])

  const getAllIds = useCallback(() => notes.map(({ id }) => id), [notes])

  const getNoteIndex = useCallback((noteId: number) => getAllIds().indexOf(noteId), [getAllIds])

  const maxId = useMemo<number>(() => {
    const ids = getAllIds()
    return ids.length === 0 ? 0 : (Math.max(...ids) || 0)
  }, [getAllIds])

  const get = useCallback((noteId: number | string) => (
    notes.find(({ id }) => id === noteId)
  ), [notes])

  const save = useCallback((noteId: number, source: string) => {
    const noteIndex = getNoteIndex(noteId)
    if (noteIndex < 0) {
      return undefined
    }
    const note = { id: noteId, source }
    setNotes(prevNotes => [
      ...prevNotes.slice(0, noteIndex),
      note,
      ...prevNotes.slice(noteIndex + 1),
    ])
    return note
  }, [getNoteIndex])

  const add = useCallback((source: string) => {
    const note = { id: maxId + 1, source }
    setNotes(prevNotes => [note, ...prevNotes])
    return note
  }, [maxId])

  const addInitial = useCallback(() => add(DEFAULT_NOTE_SOURCE), [add])

  const remove = useCallback((noteId: number) => {
    const noteIndex = getNoteIndex(noteId)
    if (noteIndex < 0) {
      return false
    }
    setNotes(prevNotes => [
      ...prevNotes.slice(0, noteIndex),
      ...prevNotes.slice(noteIndex + 1),
    ])
    return true
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
