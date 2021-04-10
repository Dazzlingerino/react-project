import React, { FC, useEffect } from 'react'
import Paginator from '../common/paginator/Paginator'
import User from './User'
import { FilterType, requestUsers } from '../../redux/usersReducer'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsersFilter,
  getUsersSuper,
} from '../../redux/usersSelectors'
import { UsersSearchForm } from './UsersSearchForm'

type PropsType = {}

export const Users: FC<PropsType> = (props) => {
  const totalUsersCount = useSelector(getTotalUsersCount)
  const users = useSelector(getUsersSuper)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getUsersFilter)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(requestUsers(currentPage, pageSize, filter))
  },[])
  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter))
  }
  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter))
  }


  
  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged} />

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        portionSize={10}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={followingInProgress}
            key={u.id}
          />
        ))}
      </div>
    </div>
  )
}

