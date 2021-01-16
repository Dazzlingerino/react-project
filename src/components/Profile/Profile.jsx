import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import BackGroundPhoto from './BackGroundPhoto/BGPhoto.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';
import classes from './Profile.module.css'
const Profile = () => {
    return (
        <div>
            <BackGroundPhoto />
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}
export default Profile