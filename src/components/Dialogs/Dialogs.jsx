import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog}>
        <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    let namesData;
    namesData = [
        {id: 1, name: "Ne Dima"},
        {id: 2, name: "Ne Koyla"},
        {id: 3, name: "Ne Vanya"},
        {id: 4, name: "Ne Tema"},
        {id: 5, name: "Ne Borya"},
        {id: 6, name: "Ne Sasha"}
    ];
    let messagesData;
    messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Hey"}
    ];
    let dialogsElements = namesData.map(d => (<DialogItem name={d.name} id={d.id}/>));

    let messageElements = messagesData.map(m => (<Message message={m.message}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>

    )

}
export default Dialogs;