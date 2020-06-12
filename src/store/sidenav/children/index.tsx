import React from 'react';
import { SideNavTitle, SideNavSubTitle } from './styles';

export const sideNavChildren = {
  login() {
    return (
      <>
        <SideNavTitle>login</SideNavTitle>
        <SideNavSubTitle>Note</SideNavSubTitle>
        <p>Please allow access us access to your spotify data.</p>
        <p>By following the instructions in the popup page.</p>
        <p>Doucmentation can be found <a href="/">here</a></p>
      </>
    );
  },
};
