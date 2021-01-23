import React from 'react';
import {ADD_MESSAGE_ACTION_CREATOR, UPDATE_NEW_MESSAGE_ACTION_CREATOR} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().DialogsPage;

    let onSendMessageClick = () => props.store.dispatch(ADD_MESSAGE_ACTION_CREATOR());
    let onMessageChange = (text) => {
        props.store.dispatch(UPDATE_NEW_MESSAGE_ACTION_CREATOR(text));
    }
    return <Dialogs onSendMessageClick={onSendMessageClick} onMessageChange={onMessageChange} state={state}/>

        }
export default DialogsContainer;