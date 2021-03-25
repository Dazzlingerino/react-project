import React from 'react';
import {addMessage, DialogsInitialStateType} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";

type OwnPropsType = {}

type MapStatePropsType ={
    DialogsPage: DialogsInitialStateType
}
type MapDispatchPropsType ={
    addMessage:(message: string) => void

}

type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    DialogsPage: state.DialogsPage,
});

export default compose(
    connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>(mapStateToProps, {addMessage}),
    withAuthRedirect)(Dialogs)