import React from 'react';
import Logo from './dragon.png';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    console.log(props)
    return (
        <header className={style.header}>
            <div>
                <img src={Logo} className={style.item}></img>
            </div>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'} activeClassName={style.activeLink}>Log in
                    </NavLink>
                }
            </div>
        </header>
    )

}
export default Header