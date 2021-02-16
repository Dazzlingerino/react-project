import React from 'react';
import avaEl from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={avaEl.ava}
                     src='https://i.pinimg.com/originals/3c/e9/ee/3ce9ee6e02ee6f9f3a4dbbb715820deb.jpg'
                />
            </div>
            <img src={props.profile.photos.large}/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.contacts.facebook}</div>
            <ProfileStatus status={props.profile.aboutMe} />
        </div>
    )
}
export default ProfileInfo;