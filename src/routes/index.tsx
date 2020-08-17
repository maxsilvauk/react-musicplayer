import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '~components/Header'
import { SideNav } from '~components/SideNav'
import Login from '~pages/login'
import Dashboard from '~pages/dashboard'
import { PrivateRoute } from '~root/routes/privateRoute'
import { AuthContext } from '~context/authContext'
import { getAccessToken } from '~utilities/index'

export const Routes = () => {
  const [authContext, dispatch] = useContext(AuthContext)

  useEffect(() => {
    const token = getAccessToken()

    const data = {
      isAuthed: true,
      accessToken: token,
      time: Date(),
    }

    if (token) {
      dispatch({
        type: 'update',
        payload: data,
      })

      localStorage.setItem('authedData', JSON.stringify(data))
    }
  }, [])

  return (
    <Router>
      <NavBar />
      <SideNav />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}
