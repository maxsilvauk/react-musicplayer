import { action, computed, thunk, persist } from 'easy-peasy'
import { UserModel } from '~store/user/types'
export * from '~store/user/types'
import { userApi } from '~api/user'

export const userModel: UserModel = persist(
  {
    loading: false,
    error: null,
    user: null,
    playlists: null,
    isAuthenticated: computed(({ user }) => user !== null),

    setUserModel: action((state, payload) => {
      Object.assign(state, payload)
    }),

    fetchUserInfo: thunk(async actions => {
      actions.setUserModel({ loading: true })
      try {
        const response = await userApi.getUserInfo()
        actions.setUserModel({ loading: false, user: response })
      } catch (error) {
        console.log(error)
        actions.setUserModel({ loading: false, error: error.message, user: null })
      }
    }),

    fetchUserPlaylists: thunk(async (actions, payload) => {
      actions.setUserModel({ loading: true })
      try {
        const response = await userApi.getUserPlaylists(payload)
        actions.setUserModel({ loading: false, playlists: response })
      } catch (error) {
        console.log(error)
        actions.setUserModel({ loading: false, error: error.message, playlists: null })
      }
    }),
  },
  {
    whitelist: ['user'],
    storage: 'localStorage',
  },
)
