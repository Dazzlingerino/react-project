import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {userType} from '../../types/types';

type PropsType = {
    user: userType
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
}

const User: React.FC<PropsType> = ({user, unfollow, follow, followingInProgress}) => {
    return (
        <span>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    <span>
                            <span> {user.name}</span>
                            <span>{'u.location.country'}</span>
                            <span>{'u.location.city'}</span>
                              </span>
                    <span> {user.status}</span>

                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>
                                Unfollow </button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>
                                Follow </button>}
                    </div>
        </span>
    )
}

export default User;