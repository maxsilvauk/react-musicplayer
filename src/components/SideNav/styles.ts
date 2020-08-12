import styled from 'styled-components';
import { rem } from 'polished';
import { Nav } from 'react-bootstrap';
import Logo from '~images/spotify-logo-lg.svg';

export const StyledLogo = styled(Logo)`
  width: 9rem;
  height: 3rem;
  margin-top: 1.6rem;
  margin-left: 1.6rem;
`;

export const StyledSideNav = styled(Nav)`
  color: ${(props) => props.theme.palette.darkGrey};
  background: ${(props) => props.theme.palette.sideNavBgColor};
  height: 100vh;
  width: ${({ theme }) => theme.metrics.sideNavWidth};
  max-width: ${rem('350px')};
  position: fixed;
  left: 0;
  box-shadow: ${rem('-10px')} 0px ${rem('40px')} 0px rgba(0, 0, 0, 0.35);
  padding-top: ${({ theme }) => theme.metrics.headerHeight};
  z-index: 100;
`;

export const TitleDiv = styled.div`
  height: ${({ theme }) => theme.metrics.headerOverlayHeight};
  position: relative;
  z-index: 200;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;

  p {
    color: white;
    margin: 0;
  }
`;

export const ChildrenDiv = styled.div`
  position: relative;
  display: block;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  overflow-wrap: anywhere;

  a {
    color: ${({ theme }) => theme.palette.primaryGreen};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.palette.primaryGreen};
      text-decoration: underline;
    }

    &.active {
      color: ${({ theme }) => theme.palette.primaryGreen};
      text-decoration: none;
    }
  }
`;

export const LinksDiv = styled.div`
  position: absolute;
  bottom: 1rem;
  padding: 0 1rem;
  width: 100%;
  text-align: center;

  a {
    display: block;
    margin: 0.5rem 0;
    background: ${({ theme }) => theme.palette.darkGrey};
    color: white;
    text-transform: uppercase;
    font-size: 1.2rem;
    border-right-width: 7px;
    border-right: solid;
    border-right-color: ${({ theme }) => theme.palette.primaryGreen};

    &.active {
      border-right-color: ${({ theme }) => theme.palette.primaryGreen};
    }
  }
`;
