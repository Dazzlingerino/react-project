import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import style from './Profile.module.css'
import ProfileStatusWithHooks from "./ProfileInfo/ProfileStatus/ProfileStatusWithHooks";


const Profile = ({store, profile, status, updateStatus}) => {
    return (
        <div className={style.profile}>
            <ProfileInfo profile={profile}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <MyPostsContainer store={store}/>
        </div>
    )
}
export default Profile