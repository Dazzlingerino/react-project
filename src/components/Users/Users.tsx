import React from 'react';
import {userType} from '../../types/types';
import Paginator from "../common/paginator/Paginator";
import User from "./User";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<userType>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<PropsType> = ({
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