import React from 'react';
import {useState} from "react/cjs/react.production.min";



export default function ProfileStatus(props) {
    // const [status, setStatus] = useState('In every life we have some trouble but when you worry you make it double');
    // const changeStatus = (e) => {
    //     setStatus(e.currentTarget.value)
    const changeStatus = () => 'hello'
    return (
        <div>
            <input onClick={changeStatus}/>

        </div>
    )
}
