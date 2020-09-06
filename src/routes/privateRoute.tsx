import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Location } from 'history'
import { RouteProps } from 'react-router-dom'
import { useStoreState } from '~root/store/hooks'

export interface RedirectState {
  from: Location
}

export const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useStoreState(({ user }) => user)

  return (
    <Route
      {...rest}
      render={({ location }) => (isAuthenticated ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />)}
    />
  )
}
