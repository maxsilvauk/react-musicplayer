import Auth from '@aws-amplify/auth';
import { thunk, action, computed, persist } from 'easy-peasy';
import { UserModel } from "~store/user/types";
import { cognitoUserAttrToStore } from "~store/user/utilities";

export * from './types';

export const userModel: UserModel = persist({

  loading: false,
  error: null,
  user: null,
  isAuthenticated: computed(({ user }) => user !== null),

  setUserModel: action((state, payload) => {
    Object.assign(state, payload);
  }),

  checkAuth: thunk(async actions => {
    try {
      await Auth.currentSession();
    } catch (error) {
      actions.setUserModel({ user: null });
    }
  }),

  login: thunk(async (actions, payload) => {
    actions.setUserModel({ loading: true });
    const { email: username, password, onSuccess } = payload;

    try {
      const cognitoUser = await Auth.signIn({ username, password });
      actions.setUserModel({
        user: cognitoUserAttrToStore(cognitoUser.attributes),
        loading: false,
        error: null
      });
      onSuccess();
    } catch (error) {
      actions.setUserModel({ error: error.message, loading: false });
    }
  }),

  logout: thunk(async actions => {
    actions.setUserModel({ loading: true });

    try {
      await Auth.signOut({ global: true });
      actions.setUserModel({ user: null, loading: false, error: null });
    } catch (error) {
      actions.setUserModel({ error: error.message, loading: false });
    }
  })

}, {
  whitelist: ['user'],
  storage: 'localStorage'
});
