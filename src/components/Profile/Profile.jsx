import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import BackGroundPhoto from './BackGroundPhoto/BGPhoto.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import style from './Profile.module.css'
import bgPhoto from './bananaBG.png';
import ProfileStatus from "./ProfileInfo/ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileInfo/ProfileStatus/ProfileStatusWithHooks";


const Profile = (props) => {
    return (
        <div className={style.profile}>
            {/*<BackGroundPhoto/>*/}
            <ProfileInfo profile={props.profile}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
export default Profile