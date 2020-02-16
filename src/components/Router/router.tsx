import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Top } from '../../pages/Top';
import { Samples } from '../../pages/Samples';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/top"} />
        </Route>
        <Route exact path={"/top"} component={Top} />
        <Route exact path={"/samples"} component={Samples} />
        <Route path={"*"}>
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </Router>
  )
}