import { Action, Computed, Thunk } from 'easy-peasy'

export interface ExplicitContent {
  filter_enabled: boolean
  filter_lockedc: boolean
}

export interface ExternalUrls {
  spotify: string
}

export interface Followers {
  href: string | null
  total: number
}

export interface User {
  country: string
  display_name: string
  email: string
  explicit_content: ExplicitContent
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: []
  product: string
  type: string
  uri: string
}

export interface UserModel {
  loading: boolean
  error: string
  user?: User | null
  playlists?: any | null
  isAuthenticated: Computed<UserModel, boolean>
  setUserModel: Action<UserModel, Partial<Pick<UserModel, 'loading' | 'error' | 'user' | 'playlists'>>>
  fetchUserInfo: Thunk<UserModel>
  fetchUserPlaylists: Thunk<UserModel, number>
}
