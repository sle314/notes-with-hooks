import React, { useCallback, useMemo, useEffect, useRef } from 'react'

import Modal from '../Modal'
import { navigate } from '@reach/router'

import { DEFAULT_CONTENT } from '../../constants'
import { Path } from '../../enums'
import { Back, Delete, Edit, Save } from '../icons'

import {
  ActionContainer,
  BackContainer,
  Buttons,
  Container,
  Content,
  IconButton,
  IconLink,
  Textarea,
} from './NoteModal.styled'
import Markdown from '../Markdown'

interface Props {
  noteId?: number
  isEdit?: boolean
}

export const NoteModal: React.SFC<Props> = ({ noteId, isEdit = false }) => {
  const onOverlayClick = useCallback(async () => {
    await navigate(Path.Notes)
  }, [])

  const onDeleteClick = useCallback(async () => {
    console.log(noteId)
    await navigate(Path.Notes)
  }, [noteId])

  const onSaveClick = useCallback(async () => {
    if (!noteId) {
      return
    }
    console.log(noteId)
    await navigate(`${Path.Notes}${noteId}/`)
  }, [noteId])

  const isShown = useMemo(() => Boolean(noteId), [noteId])

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isShown && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isShown])

  return (
    <Modal key={noteId} onOverlayClick={onOverlayClick} isShown={isShown} ref={modalRef}>
      {noteId && (
        <Container>
          <Buttons>
            <BackContainer>
              <IconLink to={Path.Notes} isLast>
                <Back/>
              </IconLink>
            </BackContainer>
            <ActionContainer>
              {!isEdit && (
                <IconLink to={`${Path.Notes}${noteId}/edit`}>
                  <Edit/>
                </IconLink>
              )}
              {isEdit && (
                <IconButton onClick={onSaveClick}>
                  <Save/>
                </IconButton>
              )}
              <IconButton onClick={onDeleteClick} isLast>
                <Delete/>
              </IconButton>
            </ActionContainer>
          </Buttons>
          <Content>
            {!isEdit && <Markdown>{`${DEFAULT_CONTENT}\n${DEFAULT_CONTENT}\n${DEFAULT_CONTENT}`}</Markdown>}
            {isEdit && <Textarea defaultValue={DEFAULT_CONTENT}/>}
          </Content>
        </Container>
      )}
    </Modal>
  )
}
