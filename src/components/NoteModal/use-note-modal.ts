import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { navigate } from '@reach/router'

import { useNotes } from '../../context'
import { Path } from '../../enums'

export const useNoteModal = (isEdit: boolean, noteId?: number) => {
  const { save, remove, get } = useNotes()
  const note = useMemo(() => noteId && get(noteId), [get, noteId])
  const [source, setSource] = useState<string>(note ? note.source : '')

  useEffect(() => {
    if (note) {
      setSource(note.source)
    }
  }, [note])

  const onTextareaChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setSource(event.target.value)
  }, [])

  const onOverlayClick = useCallback(async () => {
    await navigate(Path.Notes)
  }, [])

  const onDeleteClick = useCallback(async () => {
    if (!note) {
      return
    }
    if (remove(note.id)) {
      await navigate(Path.Notes)
    }
  }, [note, remove])

  const onSaveClick = useCallback(async () => {
    if (!note) {
      return
    }
    save(note.id, source)
    await navigate(`${Path.Notes}${note.id}/`)
  }, [note, save, source])

  const isShown = useMemo(() => Boolean(note), [note])

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isShown && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isShown])

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const prevIsEdit = useRef<boolean | undefined>(false)
  useEffect(() => {
    if (!prevIsEdit.current && isEdit && textareaRef.current) {
      textareaRef.current.focus()
      textareaRef.current.selectionStart = source.length
      textareaRef.current.selectionEnd = source.length
    }
    prevIsEdit.current = isEdit
  }, [isEdit, source.length])

  return {
    onOverlayClick,
    isShown,
    modalRef,
    note,
    onSaveClick,
    onDeleteClick,
    source,
    textareaRef,
    onTextareaChange,
  }
}
