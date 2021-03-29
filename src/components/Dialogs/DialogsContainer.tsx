import React from 'react';
import {actions, DialogsInitialStateType} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";

type OwnPropsType = {}

export type MapStatePropsType = {
    DialogsPage: DialogsInitialStateType
}
export type MapDispatchPropsType = {
    addMessage: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    DialogsPage: state.DialogsPage,
});
const addMessage = actions.addMessage
export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {addMessage}),
    withAuthRedirect)(Dialogs)