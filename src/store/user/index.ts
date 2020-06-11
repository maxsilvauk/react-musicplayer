import Auth from '@aws-amplify/auth';
import { thunk, action, computed, persist } from 'easy-peasy';
import { instance } from '~api/axiosInstance';
import { UserModel } from './types';
import { cognitoUserAttrToStore, hydrateApiAuth } from './helpers';

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
      await hydrateApiAuth();
    } catch (error) {
      actions.setUserModel({ user: null });
    }
  }),

  register: thunk(async (actions, payload) => {
    actions.setUserModel({ loading: true });
    const { email: username, oldPassword: password, newPassword, confirmNew, onSuccess } = payload;
    if (confirmNew !== newPassword) {
      actions.setUserModel({
        error: 'New password and confirm password do not match',
        loading: false
      });
      return;
    }

    try {
      const unconfirmedUser = await Auth.signIn({ username, password });
      if (unconfirmedUser.challengeName === 'NEW_PASSWORD_REQUIRED') {
        const cognitoUser = await Auth.completeNewPassword(unconfirmedUser, newPassword, null);
        actions.setUserModel({
          user: cognitoUserAttrToStore(cognitoUser.challengeParam.userAttributes),
          loading: false,
          error: null
        });
        await hydrateApiAuth();
        onSuccess();
      }
    } catch (error) {
      actions.setUserModel({ error: error.message, loading: false });
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
      await hydrateApiAuth();
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
      delete instance.defaults.headers.common.Authorization;
    } catch (error) {
      actions.setUserModel({ error: error.message, loading: false });
    }
  })

}, {
  whitelist: ['user'],
  storage: 'localStorage'
});
