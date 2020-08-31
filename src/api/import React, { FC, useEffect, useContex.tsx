import React, { FC, useEffect, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Col } from 'react-bootstrap'
import { useStoreActions, useStoreState } from '~store/hooks'
import { RedirectState } from '~root/routes/privateRoute'
import { StyledRow } from './styles'
import { AuthContext } from '~context/authContext'
import { getAccessToken } from '~utilities/index'

const Login: FC = () => {
  const history = useHistory()
  const { state } = useLocation<RedirectState>()
  const { isAuthenticated } = useStoreState(({ user }) => user)
  const [{ setUserModel }, { setSideNavModel }] = useStoreActions(({ user, sideNav }) => [user, sideNav])
  const [context, dispatch] = useContext(AuthContext)

  useEffect(() => {
    setSideNavModel({ title: 'login', activeChild: 'login' })
    const token = getAccessToken()

    const authData = {
      isAuthed: true,
      accessToken: token,
      time: Date(),
    }

    if (token) {
      dispatch({
        type: 'update',
        payload: authData,
      })

      localStorage.setItem('authedData', JSON.stringify(authData))
    }
  }, [])

  return (
    <AuthContext.Consumer>
      {auth => {
        console.log('auth', auth)
      }}
      <Container id="page-container">
        <StyledRow className="justify-content-md-center">
          <Col md="auto"></Col>
        </StyledRow>
      </Container>
    </AuthContext.Consumer>
  )
}

export default Login
