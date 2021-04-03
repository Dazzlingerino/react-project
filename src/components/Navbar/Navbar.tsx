import React, { FC } from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'
import store from '../../redux/reduxStore'

const Navbar: FC = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.activeLink}>
          Dialogs
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users" activeClassName={style.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.activeLink}>
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" activeClassName={style.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/friends"
          id={style.friends}
          activeClassName={style.activeLink}
        >
          Friends
        </NavLink>
        <Friends state={store.getState().NavBarPage} />
      </div>
      <div className={style.item}>
        <NavLink
          to="/settings"
          id={style.settings}
          activeClassName={style.activeLink}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  )
}
export default Navbar
