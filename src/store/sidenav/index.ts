import { action } from 'easy-peasy';
import { SideNavModel } from './types';

export * from './types';

const defaultState: Pick<SideNavModel, 'links' | 'activeLink' | 'subTitle' | 'title' | 'activeChild'> = {
  title: '',
  subTitle: '',
  links: [],
  activeLink: 0,
  activeChild: null,
};

export const sideNavModel: SideNavModel = {

  title: '',
  subTitle: '',
  links: [],
  activeLink: 0,
  activeChild: null,

  setSideNavModel: action((state, payload) => {
    Object.assign(state, { ...defaultState }, payload);
  }),

};
