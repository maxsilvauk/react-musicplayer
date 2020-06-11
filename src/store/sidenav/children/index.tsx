import React from 'react';
import { SideNavTitle } from './styles';

export const sideNavChildren = {
  credentials() {
    return (
      <>
        <SideNavTitle>Credentials</SideNavTitle>
        <h1>Configuration</h1>
        <p>Load your <b>certificate</b> details here</p>
        <p>Read our help documentation <span><a href="/">here</a></span></p>
      </>
    );
  },
  apiKeys() {
    return (
      <>
        <SideNavTitle>Api Keys</SideNavTitle>
        <h1>Configuration</h1>
        <p>Create api keys for the sdk and admin panel</p>
        <p>Read our help documentation <span><a href="/">here</a></span></p>
      </>
    );
  },
  login() {
    return <SideNavTitle>Log in</SideNavTitle>;
  },
  register() {
    return (
      <>
        <SideNavTitle>Register</SideNavTitle>
        <p>Use the temporary password provided in the signup email you should have recieved from us</p>
      </>
    );
  },

};
