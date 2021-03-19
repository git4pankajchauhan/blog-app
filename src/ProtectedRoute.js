import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  console.log('protected' + isAuth);
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth) {
          return <Component />;
        } else {
          console.log('ok');
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
