import React, { createContext } from 'react';
import AuthService from '../../services/authServices';

export const AuthContext = createContext({
  addUserSignedOut: () => ({}),
  removeUserSignedOut: () => ({}),
  signinRedirectCallback: () => ({}),
  logout: () => ({}),
  signoutRedirectCallback: () => ({}),
  logOut: () => ({}),
  isAuthenticated: () => ({}),
  signinRedirect: () => ({}),
  signinSilentCallback: () => ({}),
  createSigninRequest: () => ({}),
  navigateToScreen: () => ({}),
  setBearerAPIToken: accessToken => ({}),
  getUser: () => ({}),
});

export const AuthProvider = props => {
  const authService = new AuthService();
  return (
    <AuthContext.Provider value={authService}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
