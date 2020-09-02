import { action, persist, computed } from 'easy-peasy'
import { User, UserModel } from '~store/user/types'

export * from './types'

const defaultState: User = {
  name: '',
  email: '',
}

export const userModel: UserModel = persist(
  {
    loading: false,
    error: null,
    user: null,
    isAuthenticated: computed(({ user }) => user !== null),

    setUserModel: action((state, payload) => {
      Object.assign(state, { ...defaultState }, payload)
    }),
  },
  {
    storage: 'localStorage',
  },
)
