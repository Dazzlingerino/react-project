import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ADD_MESSAGE_ACTION_CREATOR, UPDATE_NEW_MESSAGE_ACTION_CREATOR} from "../../redux/dialogsReducer";


const Dialogs = (props) => {
    let messageElements = props.state.messagesData.map(m => (<Message message={m.message}/>))
    let dialogsElements = props.state.dialogsData.map(d => (<DialogItem name={d.name} id={d.id} imgURL={d.imgURL}/>));
    let messageArea = React.createRef();
    let onSendMessageClick = () => props.dialogDispatchAction(ADD_MESSAGE_ACTION_CREATOR());
    let onMessageChange = () => {
        let text = messageArea.current.value;
        props.dialogDispatchAction(UPDATE_NEW_MESSAGE_ACTION_CREATOR(text));
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
                        <textarea onChange={onMessageChange} ref={messageArea} value={props.state.newMessage} id=""
                                  cols="30" rows="2"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}> Send message</button>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Dialogs;