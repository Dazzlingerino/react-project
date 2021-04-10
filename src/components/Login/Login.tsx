import React, { FC } from 'react'
import { reduxForm, InjectedFormProps } from 'redux-form'
import {
  createField,
  GetStringKeys,
  Input,
} from '../common/FormsControls/FormsControls'
import s from '../common/FormsControls/FormsControl.module.css'
import { required } from '../../utils/validators'
import { connect, useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/reduxStore'
import Button from '@material-ui/core/Button'

type LoginFormOwnPropsType = {
  captchaUrl: string | null
}
const LoginForm: FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> &
    LoginFormOwnPropsType
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>('Email', 'email', Input, 'Login', [
        required,
      ])}
      {createField<LoginFormValuesTypeKeys>(
        'Password',
        'password',
        Input,
        'Password',
        [required],
        'password'
      )}
      {createField<LoginFormValuesTypeKeys>(
        undefined,
        'rememberMe',
        Input,
        undefined,
        [],
        'checkbox',
        'remember me'
      )}

      {captchaUrl && <img src={captchaUrl} alt={'captcha'} />}
      {captchaUrl &&
        createField<LoginFormValuesTypeKeys>(
          'symbols from image',
          'captcha',
          Input,
          undefined,
          [required]
        )}

      {error && <div className={s.formSummaryError}> {error} </div>}

      <Button type="submit" variant="contained" color="inherit">
        Submit
      </Button>
    </form>
  )
}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({
  form: 'login',
})(LoginForm)

export type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: FC = () => {
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const dispatch = useDispatch()
  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(
      login(
        formData.email,
        formData.password,
        formData.rememberMe,
        formData.captcha
      )
    )
  }
  if (isAuth) {
    console.log('hey')
    return <Redirect to={`/profile`} />
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  )
}

