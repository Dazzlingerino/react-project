import {Dispatch} from "redux";
import {ResultCodesEnum} from "../api/api";
import {UserType} from "../types/types";
import {updateObjectInArray} from "../utils/objects-helper";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {usersAPI} from "../api/users-api";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //array of users ids
}


const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'SN/USERS/SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SN/USERS/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SN/USERS/SET_USERS_TOTAL_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const actions = {
    followSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
    setUsersTotalCount: (totalCount: number) => ({
        type: 'SN/USERS/SET_USERS_TOTAL_COUNT',
        totalCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: 'SN/USERS/TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const),
    setUsers: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),
}

export const requestUsers = (requestPage: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(requestPage))
    let data = await usersAPI.getUsers(requestPage, pageSize)

    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setUsersTotalCount(data.totalCount))

}

export const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
}


export default usersReducer;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>