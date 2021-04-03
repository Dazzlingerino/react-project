import { ResultCodesEnum, ResultCodeWithCaptchaEnum } from '../api/api'
import { FormAction, stopSubmit } from 'redux-form'
import { BaseThunkType, InferActionsTypes } from './reduxStore'
import { Dispatch } from 'redux'
import { authAPI } from '../api/auth-api'
import { securityAPI } from '../api/security-api'

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  isFetching: true,
  captchaUrl: null as string | null, // if null, then captcha is not required
}

const authReducer = (
  state: InitialStateType = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case 'SN/AUTH/SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      }
    case 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    case 'SN/AUTH/TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }
    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: 'SN/AUTH/SET_USER_DATA',
      payload: { userId, login, email, isAuth },
    } as const),

  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS',
      payload: { captchaUrl },
    } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'SN/AUTH/TOGGLE_IS_FETCHING',
      isFetching,
    } as const),
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  dispatch(actions.toggleIsFetching(true))
  let meData = await authAPI.me()
  if (meData.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.toggleIsFetching(false))
    let { id, login, email } = meData.data
    dispatch(actions.setAuthUserData(id, login, email, true))
  }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  let data = await securityAPI.getCaptchaUrl()
  dispatch(actions.getCaptchaUrlSuccess(data.url))
}

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): ThunkType => async (dispatch) => {
  let loginData = await authAPI.login(email, password, rememberMe, captcha)
  if (loginData.resultCode === ResultCodesEnum.Success) {
    await dispatch(getAuthUserData())
  } else {
    if (loginData.resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired) {
      await dispatch(getCaptchaUrl())
    }

    let message =
      loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const logout = (): ThunkType => async (dispatch: DispatchType) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false))
  }
}
export default authReducer
export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
