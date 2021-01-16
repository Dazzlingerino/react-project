import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    let posts = [
        {id:1, message:'Hi! How are you?', likeCount: 30},
        {id:2, message:'It\'s my first post', likeCount: 20},
        {id:3, message:'It\'s my second post', likeCount: 10},
        {id:4, message:'It\'s my third post', likeCount: 45}
    ]
    let postElements = posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="2"></textarea>
                </div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className="posts">
                {postElements}
            </div>
        </div>
    )

}
export default MyPosts