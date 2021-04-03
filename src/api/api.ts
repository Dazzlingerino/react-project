import axios from 'axios'
import { UserType } from '../types/types'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '148bc0e9-262a-432f-a1be-cc108e8dfc97',
  },
})

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeWithCaptchaEnum {
  CaptchaIsRequired = 10,
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}
