import { Action } from 'easy-peasy'
import { sideNavChildren } from './children'

export interface SideNavLinks {
  name: string
  path: string
}

export interface SideNavModel {
  title: string
  subTitle: string
  playlists: any
  activeLink: number
  activeChild: keyof typeof sideNavChildren
  setSideNavModel: Action<
    SideNavModel,
    Pick<SideNavModel, 'title'> & Partial<Pick<SideNavModel, 'subTitle' | 'playlists' | 'activeLink' | 'activeChild'>>
  >
}
