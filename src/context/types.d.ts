interface IAuthContext {
  accessToken: string | null
  isAuthenticated: boolean
}

type TState = {
  accessToken: string | null
  isAuthed: boolean
  error: boolean
  setAuthedData: (data: object) => void
}

interface IAuthProvider {
  children: any
}

export { IAuthContext, TState, IAuthProvider }
