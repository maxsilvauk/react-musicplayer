import React from 'react'
import { SideNavTitle, SideNavSubTitle, SideNavDashBoardLink } from './styles'

export const sideNavChildren = {
  login() {
    const authLink = `${process.env.BACKEND_URI}/login`
    return (
      <>
        <SideNavTitle>login</SideNavTitle>
        <SideNavSubTitle>Note</SideNavSubTitle>
        <p>Please allow this application access to your spotify data.</p>
        <p>
          <a href={authLink}>click here</a> to proceed to the spotify authorisation page.
        </p>
      </>
    )
  },
  dashboard() {
    return (
      <>
        <SideNavTitle>Hi, Max</SideNavTitle>
        <SideNavDashBoardLink href="/dashboard">Home</SideNavDashBoardLink>
        <SideNavDashBoardLink href="/search">Search</SideNavDashBoardLink>
        <SideNavDashBoardLink href="/library">Your Library</SideNavDashBoardLink>
        <SideNavSubTitle>Your Playlists</SideNavSubTitle>
      </>
    )
  },
}
