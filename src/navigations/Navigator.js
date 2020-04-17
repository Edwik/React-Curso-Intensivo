import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFoundComponent } from "./../components/NotFoundComponent";
import { Login } from "./../pages/Login";
import Home from "./../pages/Home";

function Navigator() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={Login} />
        <Route exact path={`/home`} component={Home} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  );
}

export { Navigator };
