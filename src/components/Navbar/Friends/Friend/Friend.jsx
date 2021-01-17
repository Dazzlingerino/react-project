import React from 'react';
import style from './Friend.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <span className={style.item}>
            <NavLink to={`/friends/${props.id}`} activeClassName={style.active}><img src={props.imgURL}></img></NavLink>
        </span>
    )
}
export default Friend