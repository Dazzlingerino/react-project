import React from 'react';
import {NavLink} from "react-router-dom";
import style from './DialogItem.module.css'

const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <img src={props.imgURL}></img>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItem;