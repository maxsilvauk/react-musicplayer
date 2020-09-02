import React, { FC, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Col } from 'react-bootstrap'
import { useStoreActions, useStoreState } from '~store/hooks'
import queryString from 'query-string'
import { RedirectState } from '~root/routes/privateRoute'
import { StyledRow } from './styles'
import { userApi } from '~api/user'

const Login: FC = () => {
  const history = useHistory()
  const { state } = useLocation<RedirectState>()
  const { isAuthenticated } = useStoreState(({ user }) => user)
  const [{ setUserModel }, { setSideNavModel }] = useStoreActions(({ user, sideNav }) => [user, sideNav])

  useEffect(() => {
    if (isAuthenticated) history.replace(state?.from || '/dashboard')
  }, [isAuthenticated])

  useEffect(() => {
    setSideNavModel({ title: 'login', activeChild: 'login' })
    const token = queryString.parse(window.location.search).access_token

    const authData = {
      accessToken: token,
      time: Date(),
    }

    if (token !== undefined) {
      localStorage.setItem('auth', JSON.stringify(authData))

      setUserModel({ name: 'name', email: 'email', isAuthenticated: true })

      history.replace(state?.from || '/dashboard')
    }
  }, [])

  return (
    <Container id="page-container">
      <StyledRow className="justify-content-md-center">
        <Col md="auto"></Col>
      </StyledRow>
    </Container>
  )
}

export default Login
