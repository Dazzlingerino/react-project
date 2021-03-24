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
                   followingInProgress,
               }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={10}/>
            {console.log(totalUsersCount)}
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