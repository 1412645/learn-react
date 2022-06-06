import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated === true ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default PrivateRouter;
