import React from 'react';
import avaEl from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={avaEl.ava}
                     src='https://i.pinimg.com/originals/3c/e9/ee/3ce9ee6e02ee6f9f3a4dbbb715820deb.jpg'></img>
            </div>
            <ProfileStatus />
        </div>
    )
}
export default ProfileInfo;