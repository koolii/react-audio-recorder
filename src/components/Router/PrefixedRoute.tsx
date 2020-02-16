import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

const prefix = "/react-audio-recorder";

// ログイン済ユーザしか閲覧できないRoute
// うまく動かない
export const PrefixedRoute = (props: RouteProps) => {
  console.log(prefix);
  console.log(props);
  if (props.path === "*") {
    return <Redirect to={prefix + "/"} />;
  }
  return <Route exact path={prefix + props.path} />;
};
