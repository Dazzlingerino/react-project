import React from 'react';
import style from '../Dialogs.module.css';


const Message = ({message}) => {
    return <div className={style.message}>{message}</div>
}

export default Message;