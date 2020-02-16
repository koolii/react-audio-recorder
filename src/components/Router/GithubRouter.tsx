import React from 'react';
import { BrowserRouter as Router, Switch, Route, RouteComponentProps } from "react-router-dom";
import { Top } from '../../pages/Top';
import { Samples } from '../../pages/Samples';

const prefix = "/react-audio-recorder";

export const GithubRouter: React.FC<RouteComponentProps> = (props) => {
  console.log(props)
  console.log(typeof props);
  // const { match } = props;
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Route path={`${prefix}/top`} />
        </Route>
        <Route exact path={`${prefix}/top`} component={Top} />
        <Route exact path={`${prefix}/samples`} component={Samples} />
      </Switch>
    </Router>
  )
}