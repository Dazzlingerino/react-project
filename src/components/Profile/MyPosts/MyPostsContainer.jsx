import React from 'react';
import {ADD_POST_ACTION_CREATOR, UPDATE_NEW_POST_ACTION_CREATOR} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState().ProfilePage;
    let showPost = () => props.store.dispatch(ADD_POST_ACTION_CREATOR())
    let onPostMessageChange = (text) => {
        props.store.dispatch(UPDATE_NEW_POST_ACTION_CREATOR(text));
    }

    return <MyPosts state={state} onPostMessageChange={onPostMessageChange} onShowPost={showPost}/>

}
export default MyPostsContainer;