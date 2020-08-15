export interface IState {
  accessToken: string | null
  isAuthenticated: boolean
}

interface IReducerAction {
  type: string
  payload?: any
  authData: any
}
