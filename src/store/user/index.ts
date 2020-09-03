import { action, persist, computed, thunk } from 'easy-peasy'
import { UserModel } from '~store/user/types'
export * from '~store/user/types'
import { userApi } from '~api/user'

export const userModel: UserModel = persist(
  {
    loading: false,
    error: null,
    user: null,
    auth: null,
    isAuthenticated: computed(({ user }) => user !== null),

    setUserModel: action((state, payload) => {
      Object.assign(state, payload)
    }),

    fetchUserInfo: thunk(async (actions, payload) => {
      actions.setUserModel({ loading: true })
      try {
        const response = await userApi.getUserInfo()
        actions.setUserModel({ loading: false, error: null, user: response, auth: payload })
      } catch (error) {
        console.log(error)
        actions.setUserModel({ loading: false, error: error.message, user: null, auth: null })
      }
    }),
  },
  {
    whitelist: ['auth'],
    storage: 'localStorage',
  },
)
