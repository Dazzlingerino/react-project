import React from 'react';
import {ADD_POST_ACTION_CREATOR, UPDATE_NEW_POST_ACTION_CREATOR} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
<<<<<<< HEAD
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

=======

const MyPostsContainer = (props) => {
    let state = props.store.getState().ProfilePage;
    let showPost = () => props.store.dispatch(ADD_POST_ACTION_CREATOR())
    let onPostMessageChange = (text) => {
        props.store.dispatch(UPDATE_NEW_POST_ACTION_CREATOR(text));
    }

    return <MyPosts state={state} onPostMessageChange={onPostMessageChange} onShowPost={showPost}/>

}
>>>>>>> 7300c53f34730396228664d5b28b69cbbc46b4ce
export default MyPostsContainer;