import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let messageElements = props.state.messagesData.map(m => (<Message message={m.message}/>))
    let dialogsElements = props.state.dialogsData.map(d => (<DialogItem name={d.name} id={d.id} imgURL={d.imgURL}/>));
    let messageArea = React.createRef();
    let showMessage = () => props.dialogAction({type: 'ADD-MESSAGE', ok: 'ok'});
    let onMessageChange = () => {
        let text = messageArea.current.value;
        props.dialogAction({type: 'UPDATE-NEW-MESSAGE', text: text});
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
                        <button onClick={showMessage}> Send message</button>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Dialogs;