import React from 'react';
import style from './Friends.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendElements = props.state.map(d => (<Friend name={d.name} id={d.id} imgURL={d.imgURL}/>));
    return (
        <div className={style.containerWithFriends}>
            {friendElements}
        </div>
    )
}
export default Friends