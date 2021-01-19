import React from 'react';
import Logo from './dragon.png';
import style from './Header.module.css'
const Header = () => {
    return (
        <header className={style.header}>
            <img src={Logo} className={style.item}></img>
        </header>
    )

}
export default Header