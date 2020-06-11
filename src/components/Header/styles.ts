import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import Logo from '~images/logo-lg.svg';

export const StyledLogo = styled(Logo)`
  width: 10rem;
  height: 2.5rem;
  margin-top: 0.2rem;
  margin-right: 3rem;
`;

export const StyledNavBar = styled(Nav)`
  z-index: 500;
  position: fixed;
  height: ${({ theme }) => theme.metrics.headerHeight};
  width: 100vw;
  background: rgb(238,238,238);
  background: linear-gradient(0deg, rgba(238,238,238,1) 0%, rgba(244,244,244,1) 35%, rgba(246,246,246,1) 100%);
  margin: 0 auto;
  flex-wrap: nowrap;
  box-shadow: 0px -5px 35px 0px rgba(0,0,0,0.35);

  #main-links {
    width: auto;
    flex-grow: 2;
    max-width: none;

    .nav {
      justify-content: space-around;
      margin-top: 0.7rem;

      .nav-link {
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.palette.navGreyColor};

        &:hover {
          color: ${({ theme }) => theme.palette.secondaryBlue};
          text-decoration: none;
        }
        &.active {
          color: ${({ theme }) => theme.palette.primaryRed};
        }
      }
    }
  }
`;
