import { ResultCodesEnum, ResultCodeWithCaptchaEnum } from '../api/api'
import { FormAction, stopSubmit } from 'redux-form'
import { BaseThunkType } from './reduxStore'
import { authAPI } from '../api/auth-api'
import { securityAPI } from '../api/security-api'
import { SetAuthUserDataPayload } from '../types/apiTypes'
import {
  ActionsTypes,
  GET_CAPTCHA_URL_SUCCESS,
  SET_USER_DATA,
  TOGGLE_IS_FETCHING,
} from '../types/typesForReducers'

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: true,
  isFetching: true,
  captchaUrl: null as string | null, // if null, then captcha is not required
}

const authReducer = (
  state: InitialStateType = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl:action.payload,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching:action.payload,
      }
    default:
      return state
  }
}

const setAuthUserData = (payload: SetAuthUserDataPayload): ActionsTypes => ({
  type: SET_USER_DATA,
  payload,
})

const getCaptchaUrlSuccess = (payload:string): ActionsTypes => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload,
})

const toggleIsFetching = (payload:boolean): ActionsTypes => ({
  type: TOGGLE_IS_FETCHING,
  payload,
})

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  let meData = await authAPI.me()
  if (meData.resultCode === ResultCodesEnum.Success) {
    dispatch(toggleIsFetching(false))
    let { id, login, email } = meData.data
    dispatch(setAuthUserData({userId:id, login, email, isAuth:true}))
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  let data = await securityAPI.getCaptchaUrl()
  dispatch(getCaptchaUrlSuccess(data.url))
}

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): ThunkType => async (dispatch) => {
  let loginData = await authAPI.login(email, password, rememberMe, captcha)
  console.log(loginData)
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

export const logout = (): any => async (dispatch: any) => {
  console.log('ho')
  let response = await authAPI.logout()
  console.log(response)
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(
      setAuthUserData({ userId: null, email: null, login: null, isAuth: false })
    )
  }
}

export default authReducer
export type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
