import React, { createContext, useReducer } from 'react'
import authReducer, { authInitialState } from '~reducers/authReducer'
import { IAuthContext, IAuthProvider } from './types'

export const AuthContext = createContext(undefined)

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const authData = useReducer(authReducer, authInitialState)

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer
