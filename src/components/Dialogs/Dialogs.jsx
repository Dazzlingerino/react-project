import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {addMessage} from "../../redux/dialogsReducer";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";

const Dialogs = (props) => {

    let messageElements = props.DialogsPage.messagesData.map(m => (<Message message={m.message}/>))
    let dialogsElements = props.DialogsPage.dialogsData.map(d => (
        <DialogItem name={d.name} id={d.id} imgURL={d.imgURL}/>));

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
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
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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