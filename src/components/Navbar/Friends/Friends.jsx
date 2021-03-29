import React from 'react';
import style from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendElements = props.state.friends.map(d => (<Friend name={d.name} id={d.id} key={d.id} imgURL={d.imgURL}/>));
    return (
        <div className={style.containerWithFriends}>
            {friendElements}
        </div>
    )
}
export default Friends