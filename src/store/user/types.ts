import { Action, Computed } from 'easy-peasy';

export interface User {
  access_token: string | string[];
  isAuthenticated: boolean;
}

export interface UserModel {
  access_token: string | string[];
  isAuthenticated: Computed<UserModel, boolean>;
  setUserModel: Action<UserModel, User>;
}
