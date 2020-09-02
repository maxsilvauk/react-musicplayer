import { action, persist } from 'easy-peasy'
import { User, UserModel } from '~store/user/types'

export * from './types'

const defaultState: User = {
  name: '',
  email: '',
  isAuthenticated: false,
}

export const userModel: UserModel = persist(
  {
    name: '',
    email: '',
    isAuthenticated: false,

    setUserModel: action((state, payload) => {
      Object.assign(state, { ...defaultState }, payload)
    }),
  },
  {
    storage: 'localStorage',
  },
)
