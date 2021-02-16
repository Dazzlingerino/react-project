import {addMessage, updateNewMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    DialogsPage: state.DialogsPage,
    isAuth: state.auth.isAuth
});

const DialogsContainer = connect(mapStateToProps, {updateNewMessage, addMessage})(Dialogs);


export default DialogsContainer;