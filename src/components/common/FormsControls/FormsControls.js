import s from './FormsControl.module.css'
import {Field} from "redux-form";
import React from "react";


export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, component, validate, labelName, type = null, text = '') => (
    <div>
        <label>{labelName}</label>
        <Field name={name} component={component} placeholder={placeholder} validate={validate} type={type}/> {text}
    </div>
)
