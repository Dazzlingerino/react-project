import React from 'react';
import {ADD_MESSAGE_ACTION_CREATOR, UPDATE_NEW_MESSAGE_ACTION_CREATOR} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
<<<<<<< HEAD
import {connect} from "react-redux";


const mapStateToProps = (state) => ({DialogsPage: state.DialogsPage});
const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => dispatch(ADD_MESSAGE_ACTION_CREATOR()),
        onMessageChange: (text) => {
            dispatch(UPDATE_NEW_MESSAGE_ACTION_CREATOR(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

=======


const DialogsContainer = (props) => {
    let state = props.store.getState().DialogsPage;

    let onSendMessageClick = () => props.store.dispatch(ADD_MESSAGE_ACTION_CREATOR());
    let onMessageChange = (text) => {
        props.store.dispatch(UPDATE_NEW_MESSAGE_ACTION_CREATOR(text));
    }
    return <Dialogs onSendMessageClick={onSendMessageClick} onMessageChange={onMessageChange} state={state}/>

        }
>>>>>>> 7300c53f34730396228664d5b28b69cbbc46b4ce
export default DialogsContainer;