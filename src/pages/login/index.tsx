import React, { FC, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Col } from 'react-bootstrap'
import { useStoreActions, useStoreState } from '~store/hooks'
import queryString from 'query-string'
import { RedirectState } from '~root/routes/privateRoute'
import { StyledRow } from './styles'

const Login: FC = () => {
  const history = useHistory()
  const { state } = useLocation<RedirectState>()
  const { isAuthenticated } = useStoreState(({ user }) => user)
  const [{ setUserModel }, { setSideNavModel }] = useStoreActions(({ user, sideNav }) => [user, sideNav])

  useEffect(() => {
    setSideNavModel({ title: 'login', activeChild: 'login' })
    const parsed = queryString.parse(window.location.search).access_token
    console.log(parsed)
    if (parsed !== undefined) {
      return () => setUserModel({ access_token: parsed, isAuthenticated: true })
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) history.replace(state?.from || '/dashboard')
  }, [isAuthenticated])

  return (
    <Container id="page-container">
      <StyledRow className="justify-content-md-center">
        <Col md="auto"></Col>
      </StyledRow>
    </Container>
  )
}

export default Login
