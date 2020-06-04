import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFoundComponent } from "./../components/NotFoundComponent";
import { Login, Home, Details, Settings, Channel, TVSeries } from "./../pages";

function Navigator() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={Login} />
        <Route exact path={`/home`} component={Home} />
        <Route exact path={`/movie/:id`} component={Details} />
        <Route exact path={`/settings`} component={Settings} />
        <Route exact path={`/channel`} component={Channel} />
        <Route exact path={`/tv-series`} component={TVSeries} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  );
}

export { Navigator };
