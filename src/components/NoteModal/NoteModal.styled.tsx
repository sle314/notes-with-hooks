import React from 'react'
import { Link } from '@reach/router'
import styled, { css } from 'styled-components'

import BareButton from '../BareButton'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 100%;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BackContainer = styled.div``
export const ActionContainer = styled.div``

const iconStyle = css<{ isLast?: boolean }>`
  color: ${({ theme }) => theme.palette.common.darkGrey};
  transition: color 0.5s ease-in-out;
  margin-right: ${({ isLast = false }) => isLast ? '0' : '1.25rem'};

  :hover {
    color: ${({ theme }) => theme.palette.common.crimson};
  }
`
/*  eslint-disable-next-line */
export const IconLink = styled(({ isLast, ...rest }) => <Link {...rest}/>)`
  ${iconStyle};
`

export const IconButton = styled(BareButton)`
  ${iconStyle};
`

export const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  margin-top: 3.125rem;
  box-sizing: border-box;
  overflow-y: auto;
`

export const Textarea = styled.textarea`
  box-sizing: border-box;
  resize: none;
  width: 100%;
  flex: 1;
  border: none;
  padding: 1rem;
`
