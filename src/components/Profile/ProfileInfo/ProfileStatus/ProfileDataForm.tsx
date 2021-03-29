import React, {FC} from "react";
import {ProfileType} from "../../../../types/types";
import {createField, GetStringKeys, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    profile:ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>
const ProfileDataForm: FC<InjectedFormProps<ProfileType,PropsType>& PropsType>  = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div> {error}</div>}
        <div>
            <b>Full name</b>:
            {createField<ProfileTypeKeys>('Full Name','fullName',Input,undefined,[])}
        </div>
        <div>
            <b>Looking for a job</b>:
            {createField<ProfileTypeKeys>('','lookingForAJob',Input,undefined,[],'checkbox')}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>:
            {createField<ProfileTypeKeys>('My professional skills','lookingForAJobDescription',Textarea,undefined,[])}
        </div>
        }
        <div>
            <b>About me</b>:
            {createField<ProfileTypeKeys>('About me','aboutMe',Textarea,undefined,[])}
        </div>
        <div>
            <b>Contacts</b>:{Object
            .keys(profile.contacts)
            .map(key => {
                return <div key={key}>
                    <b>{key}:{createField<ProfileTypeKeys>(key,'contacts',Input,undefined,[])}</b>
                </div>
            })}
        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm<ProfileType,PropsType>({form:'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm