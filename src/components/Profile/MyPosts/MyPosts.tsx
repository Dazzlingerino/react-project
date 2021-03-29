import React, {FC} from 'react';
import Post from './Post/Post'
import style from './MyPosts.module.css'
import {InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../utils/validators";
import {createField, GetStringKeys, Textarea} from "../../common/FormsControls/FormsControls";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AddBoxIcon from '@material-ui/icons/AddBox';
import {MyPostsPropsType} from "./MyPostsContainer";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            padding: theme.spacing(0),
            marginBottom: theme.spacing(0.5),
            marginTop: theme.spacing(0.5),
        },
    },
    button: {
        padding: theme.spacing(0),
        marginBottom: theme.spacing(1),
    },
}));
type AddPostValuesTypeKeys = GetStringKeys<AddPostValuesType>
type AddPostValuesType = { postMessageBody:string}
type AddNewPostPropsType = {}
const AddNewPostForm:FC<InjectedFormProps<AddPostValuesType,AddNewPostPropsType>& AddNewPostPropsType> = (props) => {
    const classes = useStyles();
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostValuesTypeKeys>("Enter text here", "postMessageBody", Textarea, undefined,[required] )}
            </div>
            <div className={classes.root}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<AddBoxIcon>send</AddBoxIcon>}
                > Add post
                </Button>
            </div>
        </form>
    )
}
const AddNewPostFormWithReduxForm = reduxForm<AddPostValuesType,AddNewPostPropsType>({form: "profileAddNewPostForm"})(AddNewPostForm)



const MyPosts:FC<MyPostsPropsType> = (({ProfilePage,addPost}) => {

    let postElements = ProfilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likeCount}/>)
    let addNewPost = (values:AddPostValuesType) => addPost(values.postMessageBody);

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormWithReduxForm onSubmit={addNewPost}/>
            <div className="posts">
                {postElements}
            </div>
        </div>
    )
})
const MyPostsWithMemoHOC = React.memo(MyPosts)
export default MyPostsWithMemoHOC