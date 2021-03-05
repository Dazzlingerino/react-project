import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import s from "../common/FormsControls/FormsControl.module.css";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const onSubmit = () => {
    console.log('onSub')
}
const validate = () => {
    console.log('validate')
}

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Login</label>
                <Field name="email" component={Input} placeholder="email"
                       validate={[required]}/>
            </div>
            <div>
                <label>Password</label>
                <Field name="password" component={Input}
                       validate={[required]}
                       type="password"
                       placeholder="Password"/>
            </div>
            { props.error && <div className={s.formSummaryError}> {props.error} </div>}
            <div>
                <Field name="rememberMe" component={Input} validate={[required]} type="checkbox"/> remember me
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps,{login,logout})(Login)