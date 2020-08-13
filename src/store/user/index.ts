import { action, persist, computed } from 'easy-peasy';
import { UserModel } from '~store/user/types';

export * from './types';

const defaultState: Pick<UserModel, 'access_token'> = {
  access_token: '',
};

export const userModel: UserModel = persist(
  {
    access_token: '',
    isAuthenticated: computed(({ access_token }) => access_token !== ''),

    setUserModel: action((state, payload) => {
      Object.assign(state, { ...defaultState }, payload);
    }),
  },
  {
    whitelist: ['access_token'],
    storage: 'localStorage',
  }
);
