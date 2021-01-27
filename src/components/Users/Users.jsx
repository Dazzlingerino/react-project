import React from 'react';
import s from "./users.module.css"
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
    })}
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for(let i =1; i <= pagesCount; i++) {
            if (pages.length < 20){
            pages.push(i);
        }}
        return (
            <div>
                <div>
                    { pages.map(p => {
                    return <span className={ this.props.currentPage === p && s.selectedPage}
                    onClick={(e) => {this.onPageChanged(p)}}>{p} </span>
                })}

                </div>
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