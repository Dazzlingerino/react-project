import React from 'react';
import Header from "./Header";
import {setAuthUserData, toggleIsFetching} from "../../redux/authReducer";
import {connect} from "react-redux";
import * as axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                debugger
                    if (response.data.resultCode === 0) {
                        this.props.toggleIsFetching(false)
                        let {id, email, login} = response.data.data;
                        this.props.setAuthUserData(id, email, login)
                    }
                }
            )
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login,


})

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);