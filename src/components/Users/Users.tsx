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
import { NumberParam, StringParam, useQueryParams } from 'use-query-params'

export const Users: FC = () => {
  const totalUsersCount = useSelector(getTotalUsersCount)
  const users = useSelector(getUsersSuper)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getUsersFilter)
  const dispatch = useDispatch()

  const [query, setQuery] = useQueryParams({
    term: StringParam,
    friend: StringParam,
    page: NumberParam,
  })
  const { term, friend, page } = query

  useEffect(() => {
    let actualPage = currentPage
    let actualFilter = filter
    debugger
    if (!!page) actualPage = Number(page)
    if (!!term) actualFilter = { ...actualFilter, term: term as string }
    if (!!friend)
      actualFilter = {
        ...actualFilter,
        friend: friend === 'null' ? null : friend === 'true',
      }

    dispatch(requestUsers(actualPage, pageSize, actualFilter))
  }, [currentPage, dispatch, filter, friend, page, pageSize, term])

  useEffect(() => {
    setQuery({ term, friend, page }, 'push')
  }, [filter, currentPage, setQuery, term, friend, page])

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
          <User user={u} followingInProgress={followingInProgress} key={u.id} />
        ))}
      </div>
    </div>
  )
}
