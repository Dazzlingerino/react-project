import React,{FC} from 'react';
import {reduxForm, InjectedFormProps} from "redux-form";
import {createField, GetStringKeys, Input} from "../common/FormsControls/FormsControls";
import s from "../common/FormsControls/FormsControl.module.css";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";
import Button from '@material-ui/core/Button';


type LoginFormOwnPropsType = {
    captchaUrl:string | null
}
const LoginForm:FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnPropsType>& LoginFormOwnPropsType> = ({handleSubmit, error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("email", "email", Input, 'Login',[required] )}
            {createField<LoginFormValuesTypeKeys>("Password", "password", Input, 'Password',[required],  "password")}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", Input, undefined, [], "checkbox",'remember me')}

            { captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
            { captchaUrl && createField<LoginFormValuesTypeKeys>('symbols from image','captcha',Input,undefined,[required])}

            {error && <div className={s.formSummaryError}> {error} </div>}

            <Button type="submit" variant="contained" color='inherit'>Submit</Button>
        </form>
    )

}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl:string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login:(email: string, password: string, rememberMe: boolean, captcha: string)=> void

}
export type LoginFormValuesType ={
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>
const Login:FC<MapStatePropsType & MapDispatchPropsType>= ({login, isAuth,captchaUrl}) => {
    const onSubmit = (formData:LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {login, logout})(Login)