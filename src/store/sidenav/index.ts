import { action } from 'easy-peasy'
import { SideNavModel } from './types'

export * from './types'

const defaultState: Pick<SideNavModel, 'title' | 'subTitle' | 'playlists' | 'activeLink' | 'activeChild'> = {
  title: '',
  subTitle: '',
  playlists: {},
  activeLink: 0,
  activeChild: null,
}

export const sideNavModel: SideNavModel = {
  title: '',
  subTitle: '',
  playlists: {},
  activeLink: 0,
  activeChild: null,

  setSideNavModel: action((state, payload) => {
    Object.assign(state, { ...defaultState }, payload)
  }),
}
