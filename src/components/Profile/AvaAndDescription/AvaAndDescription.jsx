import React from 'react';
import avaEl from './AvaAndDescription.module.css'
const AvaAndDescription = () => {
    return (
        <div>
            <div>
                <img className={avaEl.ava} src='https://i.pinimg.com/originals/3c/e9/ee/3ce9ee6e02ee6f9f3a4dbbb715820deb.jpg'></img>
            </div>
            <div>
                <em>In every life we have some trouble but when you worry you make it double</em >
            </div>
        </div>
    )
}
export default AvaAndDescription;