import { AppStateType } from './reduxStore'

export const getProfile = (state: AppStateType) => {
  return state.ProfilePage.profile
}
export const getWholeProfilePage = (state: AppStateType) => {
  return state.ProfilePage
}

export const getStatus = (state: AppStateType) => {
  return state.ProfilePage.status
}
