import React from 'react';
import Post from './Post/Post'
import style from './MyPosts.module.css'

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>)
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="2">Write here..</textarea>
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