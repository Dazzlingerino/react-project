import { AppStateType } from './reduxStore'

export const getAuthorizedUserId = (state: AppStateType) => {
  return state.auth.userId
}

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth
}

export const getIsFetching = (state: AppStateType) => {
  return state.auth.isFetching
}

export const getCaptchaUrl = (state: AppStateType) => {
  return state.auth.captchaUrl
}
