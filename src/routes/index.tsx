import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '~components/Header'
import { SideNav } from '~components/SideNav'
import Login from '~pages/login'
import Dashboard from '~pages/dashboard'
import { PrivateRoute } from '~root/routes/privateRoute'

export const Routes = () => {
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
