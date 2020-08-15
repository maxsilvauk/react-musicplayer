// export type TSetAccessTokenType = (token: string) => void

export interface IAuthContext {
  accessToken: string | null
  isAuthenticated: boolean
  // setAccessToken: TSetAccessTokenType
}

export interface IAuthProvider {
  children: JSX.Element
}
