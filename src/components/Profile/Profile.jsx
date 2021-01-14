import React from 'react';
import AvaAndDescription from './AvaAndDescription/AvaAndDescription.jsx';
import BackGroundPhoto from './BackGroundPhoto/BGPhoto.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';
import classes from './Profile.module.css'
const Profile = () => {
    return (
        <div>
            <BackGroundPhoto />
            <AvaAndDescription />
            <MyPosts />
        </div>
    )
}
export default Profile