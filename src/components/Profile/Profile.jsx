import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import classes from './Profile.module.css'
const Profile = () => {
    return <div className={classes.content}>
        <div >
            <img className={classes.photoOfProfile} src='https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg'></img>
        </div>
        <div>
            <div>
                <img className={classes.ava} src='https://i.pinimg.com/originals/3c/e9/ee/3ce9ee6e02ee6f9f3a4dbbb715820deb.jpg'></img>
            </div>
            <div>
                Description
            </div>
        </div>
        <MyPosts />
    </div>
}
export default Profile