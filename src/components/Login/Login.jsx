import React from 'react';
import {reduxForm, Field} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
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

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField("email", "email", Input, [required], 'Login')}
            {createField("Password", "password", Input, [required], 'Password', "password")}
            {createField(null, "rememberMe", Input, null, null, "checkbox",'remember me')}

            {error && <div className={s.formSummaryError}> {error} </div>}

            <button type="submit">Submit</button>
        </form>
    )

}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
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
export default connect(mapStateToProps, {login, logout})(Login)