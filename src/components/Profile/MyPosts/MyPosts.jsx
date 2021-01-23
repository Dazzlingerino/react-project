import React from 'react';
import Post from './Post/Post'
import style from './MyPosts.module.css'


const MyPosts = (props) => {
    let postElements = props.state.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>)
    let postArea = React.createRef();
    let postMessageBody = props.state.newPost
    let onShowPost = () => props.onShowPost();
    let onPostMessageChange1 = () => props.onPostMessageChange(postArea.current.value)


    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostMessageChange1} value={postMessageBody} ref={postArea} name="" id=""
                              cols="30" rows="2"/>
                </div>
                <div>
                    <button onClick={onShowPost}> Add post</button>
                </div>
            </div>
            <div className="posts">
                {postElements}
            </div>
        </div>
    )

}
export default MyPosts