import {addMessage, updateNewMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    DialogsPage: state.DialogsPage,
});

export default compose(
    connect(mapStateToProps, {updateNewMessage, addMessage}),
    withAuthRedirect
)(Dialogs)
