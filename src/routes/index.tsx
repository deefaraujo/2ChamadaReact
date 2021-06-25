import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Update from '../pages/Update'

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/events/:id' exact component={Update} />
  </Switch>
)

export default Routes
