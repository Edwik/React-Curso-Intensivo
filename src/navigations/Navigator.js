import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NotFoundComponent } from './../components/NotFoundComponent'
import { Login } from './../pages/Login'
import { Movies } from './../pages/Movies'
import { Details } from './../pages/Details'

function Navigator() {

  return (
    <Router>
      <Switch>
        <Route exact path={`/movies/details`} component={Details} />
        <Route exact path={`/movies`} component={Movies} />
        <Route exact path={`/`} component={Login} />
        <Route component={NotFoundComponent} />

      </Switch>
    </Router>
  )
}

export { Navigator }
