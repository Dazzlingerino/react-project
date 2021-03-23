import React from 'react';
import {NavLink} from "react-router-dom";
import style from './DialogItem.module.css'

const DialogItem = ({imgURL,id,name}) => {
    return (
        <div className={style.dialog}>
            <img src={imgURL} alt={'Empty'}/>
            <NavLink to={`/dialogs/${id}`} activeClassName={style.active}>{name}</NavLink>
        </div>
    )

}

export default DialogItem;