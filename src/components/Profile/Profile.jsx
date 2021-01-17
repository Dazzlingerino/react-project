import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import BackGroundPhoto from './BackGroundPhoto/BGPhoto.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';
import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div>
            <BackGroundPhoto/>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}
export default Profile