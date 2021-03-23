import React from 'react';
import Paginator from "../common/paginator/Paginator";
import User from "./User";

const Users = ({
                   totalUsersCount,
                   pageSize,
                   currentPage,
                   onPageChanged,
                   users,
                   unfollow,
                   follow,
                   followingInProgress
               }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            {console.log(users)}
            <div>
                {users.map(u => <User user={u}
                                      unfollow={unfollow}
                                      follow={follow}
                                      followingInProgress={followingInProgress}
                                      key={u.id}
                    />
                )
                }
            </div>
        </div>
    )
}

export default Users;