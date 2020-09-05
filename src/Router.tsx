import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import Notes from './route-components/Notes'

export const Router: React.SFC = () => (
  <ReachRouter>
    <Notes path='/'/>
    <Notes path='/:noteId/'/>
    <Notes path='/:noteId/edit/' isEdit/>
  </ReachRouter>
)

export default Router
