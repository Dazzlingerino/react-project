import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";

const Dialogs = ({DialogsPage, addMessage}) => {

    let messageElements = DialogsPage.messagesData.map(m => (<Message message={m.message}/>))
    let dialogsElements = DialogsPage.dialogsData.map(d => (
        <DialogItem name={d.name} id={d.id} imgURL={d.imgURL}/>));

    let addNewMessage = (values) => {
        addMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}
const maxLength150 = maxLengthCreator(150)
const AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='newMessageBody' component={Textarea}
                       validate={[required, maxLength150]}/>
            </div>
            <div>
                <button> Send message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;