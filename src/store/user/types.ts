import { Action, Computed } from 'easy-peasy'

export interface User {
  name: string
  email: string
}

export interface UserModel {
  loading: boolean
  error: string
  user: User | null
  isAuthenticated: Computed<UserModel, boolean>
  setUserModel: Action<UserModel, User>
}
