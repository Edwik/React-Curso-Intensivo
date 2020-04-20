import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFoundComponent } from "./../components/NotFoundComponent";
import Login from "./../pages/Login";
import Home from "./../pages/Home";
import Details from "./../pages/Details";

function Navigator() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={Login} />
        <Route exact path={`/home`} component={Home} />
        <Route exact path={`/details`} component={Details} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  );
}

export { Navigator };
