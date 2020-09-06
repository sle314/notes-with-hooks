import { NOTES_STORAGE_KEY } from '../constants'
import { Note } from '../interfaces/note'
import { isClient } from '../utils'

export const getNotes = (): Note[] => {
  if (!isClient()) {
    return []
  }
  const notes = window.localStorage.getItem(NOTES_STORAGE_KEY)
  return notes ? JSON.parse(notes) as Note[] : []
}

export const storeNotes = (notes: Note[]): void => {
  if (!isClient()) {
    return
  }
  window.localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes))
}
