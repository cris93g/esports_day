import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tournament from "./components/tournament/Tournament";
import Teams from "./components/teams/Teams";
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Teams} exact path="/teams/:serieid" />
    <Route component={Tournament} exact path="/tournament" />
  </Switch>
);
