import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Top } from '../../pages/Top';
// import { Samples } from '../../pages/Samples';
// うまく動かない
// import { GithubRouter } from './GithubRouter';

export const AppRouter: React.FC = () => {
  // const prefix = "/react-audio-recorder";
  // const prefix = "";
      // <Switch>
      //   <Route exact path={`${prefix}/`}>
      //     <Route path={`${prefix}/top`} />
      //   </Route>
      //   <Route exact path={`${prefix}/top`} component={Top} />
      //   <Route exact path={`${prefix}/samples`} component={Samples} />
      //   <Route path={'*'}>
      //     <Redirect to="/top" />
      //   </Route>
      // </Switch>
  return (
    <Router>
      <Switch>
        <Route exact path={'*'} component={Top} />
        {/* <Route exact path={'/top'} component={Top} /> */}
        {/* <Route exact path={'/samples'} component={Samples} /> */}
        {/* <Route path={'*'}>
          <Redirect to="/" />
        </Route> */}
      </Switch>
    </Router>
  )
}