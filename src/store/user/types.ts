import { Action, Computed } from 'easy-peasy';

export interface User {
  access_token: string;
}

export interface UserModel {
  access_token: string;
  isAuthenticated: Computed<UserModel, boolean>;
  setUserModel: Action<UserModel, Pick<UserModel, 'access_token'>>;
}
