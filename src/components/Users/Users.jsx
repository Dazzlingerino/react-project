import React from 'react';
import s from "./users.module.css"
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                          <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                          <span>
                            <span> {u.name}</span>
                            <span>{'u.location.country'}</span>
                            <span>{'u.location.city'}</span>
                              </span>
                            <span> {u.status}</span>

                        <div>
                            {u.followed ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}> Follow </button>}

                        </div>


                        </span>

                    </div>)
                }
            </div>
        )
    }
};


export default Users;