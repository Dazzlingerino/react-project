import React from 'react';
import Post from './Post/Post'
const MyPosts = () => {
    return (
        <div>
            <Post message='hi!how are you?' likesCount='30' />
            <Post message="It's my first post" likesCount='20' />
            <Post />
            <Post />
        </div>)

}
export default MyPosts