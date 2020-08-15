import { loadingState } from '~root/globals'
import { IState, IReducerAction } from './types'
import { actions } from './actions'

export const authInitialState = {
  mode: loadingState.IDLE,
  auth: false,
  error: false,
}

const initialState: IState = {
  accessToken: null,
  isAuthenticated: false,
}

const authReducer = (state: IState = initialState, action: IReducerAction) => {
  switch (action.type) {
    case actions.SET_ACCESS_TOKEN:
      return {
        ...state,
        ...action.authData,
      }
    case actions.RESET_ACCESS_TOKEN:
      return {
        ...authInitialState,
      }
    case actions.ERROR:
      return {
        ...authInitialState,
        ...action.payload,
      }
    default:
      throw new Error('Unexpected action')
  }
}

export default authReducer
