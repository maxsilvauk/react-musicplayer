import { User } from './types';

export const cognitoUserAttrToStore = (attr: any): User => ({
  email: attr.email,
  username: attr.username,
  name: attr.name,
});
