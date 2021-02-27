import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    ProfilePage: state.ProfilePage
});


const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);


export default MyPostsContainer;