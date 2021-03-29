import React,{Component} from 'react';
import Header from "./Header";
import {getAuthUserData, actions, logout} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";


type MapStatePropsType = {
    login: string | null
    isFetching: boolean
    isAuth: boolean
}
type MapDispatchPropsType = {
    toggleIsFetching: (isFetching: boolean) => void
    getAuthUserData: () => void
    logout: () => void
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType
class HeaderContainer extends Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state:AppStateType) => ({
    isFetching: state.auth.isFetching,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})


export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
    {setAuthUserData:actions.setAuthUserData, toggleIsFetching:actions.toggleIsFetching, getAuthUserData,logout})(HeaderContainer)