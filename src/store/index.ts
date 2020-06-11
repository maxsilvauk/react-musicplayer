import { createStore } from 'easy-peasy';
import { UserModel, userModel } from './user';
import { ApiKeysModel, apiKeysModel } from './api-keys';
import { SideNavModel, sideNavModel } from './sidenav';

export interface StoreModel {
  user: UserModel;
  apiKeys: ApiKeysModel;
  sideNav: SideNavModel;
}

const storeModel: StoreModel = {
  user: userModel,
  apiKeys: apiKeysModel,
  sideNav: sideNavModel,
};

export const store = createStore<StoreModel>(storeModel, { name: 'PushologiesAdminStore' });
