import { AppStateType } from './reduxStore'

export const getProfile = (state: AppStateType) => {
  return state.ProfilePage.profile
}

export const getStatus = (state: AppStateType) => {
  return state.ProfilePage.status
}
