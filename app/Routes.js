import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppMaster from './components/AppMaster'
import PostShow from './components/PostShow'

export default (
  <Route path="/" component={AppMaster}>
    <IndexRoute component={PostShow} />
    <Route path="posts/:id" component={PostShow} />
  </Route>
)
