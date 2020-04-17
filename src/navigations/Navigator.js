import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {NotFoundComponent} from './../components/NotFoundComponent'
import {Login} from './../pages/Login'

function Navigator() {

  return (
    <Router>
      <Switch>
        
        <Route exact path={`/login`} component={Login} />
        <Route component={NotFoundComponent} />

      </Switch>
    </Router>
  )
}

export {Navigator}
