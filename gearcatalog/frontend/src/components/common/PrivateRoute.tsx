import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AuthReducerState,
  RootReducerState
} from '../../reducers/reducer.types';

const PrivateRoute = ({ component: Component, auth, ...rest }:
  PrivateRouteProps) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isLoading) {
        return <h2>Loading...</h2>;
      } else if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

type PrivateRouteProps = RouteProps & {
  // TODO:#4 Find correct React Component type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,
  auth: AuthReducerState,
  path: string
};

const mapStateToProps = (state: RootReducerState) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
