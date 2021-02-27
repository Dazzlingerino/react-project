import React from 'react';
import {reduxForm, Field} from "redux-form";

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
                <Field name="login" component="input" placeholder="Login"/>
            </div>
            <div>
                <label>Password</label>
                <Field name="password" component="input" placeholder="Password"/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/> remember me
            </div>


            <button type="submit">Submit</button>
        </form>
    )

}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
export default Login