import React from 'react';
import Post from './Post/Post'
import style from './MyPosts.module.css'
import {addPost, updateNewPost} from "../../../redux/profileReducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10)

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='postMessageBody' component={Textarea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props) => {

    let postElements = props.ProfilePage.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>)


    let addNewPost = (values) => props.addPost(values.postMessageBody);

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={addNewPost}/>
            <div className="posts">
                {postElements}
            </div>
        </div>
    )

}
export default MyPosts