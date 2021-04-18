import React, { FC } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import {
  createField,
  GetStringKeys,
  Input,
} from '../common/FormsControls/FormsControls'
import s from '../common/FormsControls/FormsControl.module.css'
import { required } from '../../utils/validators'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { getCaptchaUrl, getIsAuth } from '../../redux/authSelectors'

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

const LoginPage: FC = () => {
  const captchaUrl = useSelector(getCaptchaUrl)
  const isAuth = useSelector(getIsAuth)
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
    debugger
    return <Redirect to={`/profile`}/>
  } else {
    return (
      <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
      </div>
    )
  }
}
const LoginPageWithMemoHOC = React.memo(LoginPage)
export default LoginPageWithMemoHOC