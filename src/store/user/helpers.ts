import { Auth } from '@aws-amplify/auth';
import { User } from './types';
import { instance } from '~api/axiosInstance';

export const cognitoUserAttrToStore = (attr: any): User => ({
  email: attr.email,
  username: attr.username,
  name: attr.name,
  tenantId: attr['custom:tenant_id'],
  permissions: attr['custom:permissions'].split(','),
  isAdmin: Boolean(attr['custom:is_admin'])
});

export const hydrateApiAuth = async () => {
  const session = await Auth.currentSession();
  instance.defaults.headers.common.Authorization = `Bearer ${session.getIdToken().getJwtToken()}`;
};
