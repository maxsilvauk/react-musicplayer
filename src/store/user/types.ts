import { Action } from 'easy-peasy'

export interface User {
  name: string
  email: string
  isAuthenticated: boolean;
}

export interface UserModel {
  name: string
  email: string
  isAuthenticated: boolean;
  setUserModel: Action<UserModel, User>
}
