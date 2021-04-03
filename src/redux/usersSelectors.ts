import { createSelector } from 'reselect'
import { AppStateType } from './reduxStore'

export const getUsers = (state: AppStateType) => {
  return state.UsersPage.users
}
export const getUsersSuper = createSelector(getUsers, (users) => {
  return users.filter((u) => true)
})

export const getPageSize = (state: AppStateType) => {
  return state.UsersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
  return state.UsersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
  return state.UsersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
  return state.UsersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
  return state.UsersPage.followingInProgress
}
