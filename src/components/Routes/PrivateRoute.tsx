import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthStatusContext } from "../../utils/AuthState";

interface IPrivateRouteProps {
  component: React.ComponentType<any>;
  exact?: boolean;
  path: string;
}

const PrivateRoute = ({
  component: Component,
  ...rest
}: IPrivateRouteProps) => {
  const { loggedIn } = useContext(AuthStatusContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
