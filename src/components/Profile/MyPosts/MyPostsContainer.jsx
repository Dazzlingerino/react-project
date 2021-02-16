import {addPost, updateNewPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    ProfilePage: state.ProfilePage
});


const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPost})(MyPosts);


export default MyPostsContainer;