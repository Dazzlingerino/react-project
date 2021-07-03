import { SetAuthUserDataPayload } from './apiTypes'

export const SET_USER_DATA = 'SN/AUTH/SET_USER_DATA'
export const GET_CAPTCHA_URL_SUCCESS = 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS'
export const TOGGLE_IS_FETCHING = 'SN/AUTH/TOGGLE_IS_FETCHING'

export interface SetAuthUserDataAction {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataPayload
}

export interface GetCaptchaUrlSuccessAction {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: string
}

export interface ToggleIsFetchingAction {
  type: typeof TOGGLE_IS_FETCHING
  payload: boolean
}

export type ActionsTypes =
  | SetAuthUserDataAction
  | GetCaptchaUrlSuccessAction
  | ToggleIsFetchingAction
