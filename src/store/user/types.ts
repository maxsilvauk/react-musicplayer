import { Action, Thunk, Computed } from 'easy-peasy';

export interface User {
  name: string;
  username: string;
  email: string;
}

export interface UserModel {
  loading: boolean;
  error: string;
  user: User;
  isAuthenticated: Computed<UserModel, boolean>;
  checkAuth: Thunk<UserModel>;
  setUserModel: Action<UserModel, Partial<Pick<UserModel, 'user' | 'error' | 'loading'>>>;
  login: Thunk<UserModel, { email: string, password: string, onSuccess: () => void }>;
  logout: Thunk<UserModel>;
}
