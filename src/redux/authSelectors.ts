import { AppStateType } from './reduxStore'

export const getAuthorizedUserId = (state: AppStateType) => {
  return state.auth.userId
}

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth
}
