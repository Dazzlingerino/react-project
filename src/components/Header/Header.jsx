import React from 'react';
import Logo from './dragon.png';
import headerEl from './Header.module.css'
const Header = () => {
    return (
        <header className={headerEl.header}>
            <img src={Logo} className={headerEl.item}></img>
        </header>
    )

}
export default Header