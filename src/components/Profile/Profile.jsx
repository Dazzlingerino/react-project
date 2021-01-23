import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import BackGroundPhoto from './BackGroundPhoto/BGPhoto.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import style from './Profile.module.css'
import bgPhoto from './bananaBG.png';


const Profile = (props) => {
    return (
        <div className={style.profile}>
            <BackGroundPhoto/>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>

        </div>
    )
}
export default Profile