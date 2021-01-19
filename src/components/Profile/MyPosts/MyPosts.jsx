import React from 'react';
import Post from './Post/Post'
import style from './MyPosts.module.css'

const MyPosts = (props) => {
    let postElements = props.state.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>)
    let postArea = React.createRef();
    let showPost = () => props.postAction({type:'ADD-POST'})
    let onPostMessageChange = () => {
        let text = postArea.current.value;
        debugger;
        props.postAction({type:'UPDATE-POST-MESSAGE', text:text});
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostMessageChange} value={props.state.newPost} ref={postArea} name="" id="" cols="30" rows="2" />
                </div>
                <div>
                    <button onClick={showPost}> Add post</button>
                </div>
            </div>
            <div className="posts">
                {postElements}
            </div>
        </div>
    )

}
export default MyPosts