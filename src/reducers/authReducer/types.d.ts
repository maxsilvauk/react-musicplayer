interface IAuthInitialState {
  accessToken: string | null
  isAuthed: boolean
  error: boolean
  setAuthedData: (data: object) => void
}

interface IState {
  accessToken: string | null
  isAuthed: boolean
  error: boolean
  setAuthedData: (data: object) => void
}

interface IReducerAction {
  type: string
  payload?: any
  authData: any
}

export { IAuthInitialState, IState, IReducerAction }
