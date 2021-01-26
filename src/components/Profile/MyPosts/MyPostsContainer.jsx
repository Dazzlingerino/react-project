import React from 'react';
import {ADD_POST_ACTION_CREATOR, UPDATE_NEW_POST_ACTION_CREATOR} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({ProfilePage: state.ProfilePage});
const mapDispatchToProps = (dispatch) => {
    return {
        onShowPost: () => dispatch(ADD_POST_ACTION_CREATOR()),
        onPostMessageChange: (text) => {
            dispatch(UPDATE_NEW_POST_ACTION_CREATOR(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;