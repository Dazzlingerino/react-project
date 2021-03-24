import React from 'react';
import Post from './Post/Post'
import style from './MyPosts.module.css'
import {addPost, updateNewPost} from "../../../redux/profileReducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {Button} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import {makeStyles} from "@material-ui/core/styles";
import AddBoxIcon from '@material-ui/icons/AddBox';

const maxLength10 = maxLengthCreator(10)
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

function AddNewPostForm({handleSubmit}) {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='postMessageBody' component={Textarea} validate={[required, maxLength10]}/>
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

AddNewPostForm = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo(({ProfilePage}) => {

    let postElements = ProfilePage.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>)


    let addNewPost = (values) => addPost(values.postMessageBody);

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={addNewPost}/>
            <div className="posts">
                {postElements}
            </div>
        </div>
    )

})
export default MyPosts