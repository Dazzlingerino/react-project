import s from './FormsControl.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import React,{FC} from "react";
import {FieldValidatorType} from "../../../utils/validators";


type FormControlPropsType = {
    meta: WrappedFieldMetaProps

}

export const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}


export function createField<FormKeysType extends string> (placeholder: string | undefined,
                            name: FormKeysType,
                            component: FC<WrappedFieldProps>,
                            labelName: string | undefined,
                            validate?: Array<FieldValidatorType>, type?: string | null, text = '') {
    return <div>
        <label>{labelName}</label>
        <Field name={name} component={component} placeholder={placeholder} validate={validate} type={type}/> {text}
    </div>
}
export type GetStringKeys<T> = Extract<keyof T,string>