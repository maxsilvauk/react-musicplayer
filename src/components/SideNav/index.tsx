import React, { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStoreState } from '~store/hooks'
import { sideNavChildren } from '~store/sidenav/children'
import { StyledSideNav, StyledLogo, ChildrenDiv, LinksDiv } from './styles'

export const SideNav: FC = () => {
  const { playlists, activeChild } = useStoreState(({ sideNav }) => sideNav)
  const links: any = Object.entries(playlists)

  console.log('activeChild', activeChild)

  return (
    <StyledSideNav defaultActiveKey="/" className="flex-column">
      <Link className="nav-link" to="/">
        <StyledLogo />
      </Link>
      {activeChild && <ChildrenDiv>{sideNavChildren[activeChild]()}</ChildrenDiv>}
      <LinksDiv>
        {links.map((link: any[]) => (
          <NavLink key={link[1].id} to={link[1].external_urls}>
            {link[1].name}
          </NavLink>
        ))}
      </LinksDiv>
    </StyledSideNav>
  )
}
