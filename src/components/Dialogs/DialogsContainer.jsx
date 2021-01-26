import React from 'react';
import {ADD_MESSAGE_ACTION_CREATOR, UPDATE_NEW_MESSAGE_ACTION_CREATOR} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

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




export default DialogsContainer;