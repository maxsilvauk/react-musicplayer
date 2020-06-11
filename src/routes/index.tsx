import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '~components/Header';
import { SideNav } from '~components/SideNav';
import Login from '~pages/login';
import Register from '~pages/register';
import { Settings } from '~pages/settings';
import Dashboard from '~pages/dashboard';
import { useStoreActions } from '~root/store/hooks';
import { PrivateRoute } from './privateRoute';

export { PrivateRoute } from './privateRoute';

export const Routes = () => {
  const { checkAuth } = useStoreActions(({ user }) => user);

  React.useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Router>
      <NavBar />
      <SideNav />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/settings">
          <Settings />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
