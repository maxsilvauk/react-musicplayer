import styled from 'styled-components'
import { rem } from 'polished'

export const SideNavTitle = styled.h1`
  font-family: CircularStdBold;
  font-size: ${rem('24px')};
  margin: ${rem('46.4px')} 0 ${rem('48px')};
  color: ${({ theme }) => theme.palette.primaryGreen};
`

export const SideNavSubTitle = styled.p`
  font-family: CircularStdBold;
  font-size: ${rem('16px')};
  margin-top: ${rem('40px')};
`
export const SideNavDashBoardLink = styled.a`
  display: block;
  margin-bottom: ${rem('4px')};
  font-size: ${rem('18px')};
  color: white !important;
  font-family: 'CircularStdMedium'

  &:hover {
    color: ${({ theme }) => theme.palette.primaryGreen} !important;
  }
`
