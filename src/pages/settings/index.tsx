import React from 'react';
import { Redirect, Switch, useRouteMatch } from 'react-router-dom';
import { PrivateRoute } from '~root/routes';
import { ApiKeys } from './api-keys';
import { Credentials } from './credentials';

export const Settings: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <PrivateRoute exact path={path}>
        <Redirect to={`${path}/api-keys`} />
      </PrivateRoute>
      <PrivateRoute path={`${path}/api-keys`}>
        <ApiKeys />
      </PrivateRoute>
      <PrivateRoute path={`${path}/credentials`}>
        <Credentials />
      </PrivateRoute>
    </Switch>
  );
};
