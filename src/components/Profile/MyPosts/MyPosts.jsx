import React from 'react';
import Post from './Post/Post'
const MyPosts = () => {
    return (
        <div>
            <Post message='hi!how are you?' like='30' />
            <Post message="It's my first post" like='20' />
            <Post />
            <Post />
        </div>)

}
export default MyPosts