import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import BackGroundPhoto from './BackGroundPhoto/BGPhoto.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';
import style from './Profile.module.css'
import bgPhoto from './bananaBG.png';

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <BackGroundPhoto/>
            <ProfileInfo/>
            <MyPosts postDispatchAction={props.postsDispatchActions}
                     state={props.state.ProfilePage}/>

        </div>
    )
}
export default Profile