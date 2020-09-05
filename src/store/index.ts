import { createStore } from 'easy-peasy'
import { UserModel, userModel } from './user'
import { SideNavModel, sideNavModel } from './sidenav'

export interface StoreModel {
  user: UserModel
  sideNav: SideNavModel
}

const storeModel: StoreModel = {
  user: userModel,
  sideNav: sideNavModel,
}

export const store = createStore<StoreModel>(storeModel, { name: 'ReactSpotifyPlayerStore' })
