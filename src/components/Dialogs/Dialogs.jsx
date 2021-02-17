import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let messageElements = props.DialogsPage.messagesData.map(m => (<Message message={m.message}/>))
    let dialogsElements = props.DialogsPage.dialogsData.map(d => (
        <DialogItem name={d.name} id={d.id} imgURL={d.imgURL}/>));
    let newMessageBody = props.DialogsPage.newMessage
    let onSendMessageClick1 = () => props.onSendMessageClick();
    let onMessageChange1 = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }


    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <div>
                        <textarea onChange={onMessageChange1} value={newMessageBody} id=""
                                  cols="30" rows="2"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick1}> Send message</button>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Dialogs;