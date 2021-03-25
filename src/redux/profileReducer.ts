import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {photosType, postType, profileType } from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likeCount: 30},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
        {id: 3, message: 'It\'s my second post', likeCount: 10},
        {id: 4, message: 'It\'s my third post', likeCount: 45}
    ] as Array<postType>,
    profile: null as profileType |null,
    status: '',
    newPostText: '',
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newMessage = action.postText
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: newMessage, likeCount: 5}],
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile,photos:action.photos} as profileType
            }
        }
        default:
            return state;
    }
}
type addPostActionType = {
    type: typeof ADD_POST
    postText:string
}
export const addPost = (postText: string):addPostActionType => ({type: ADD_POST, postText})

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile:profileType
}
export const setUserProfile = (profile: profileType):setUserProfileActionType => ({type: SET_USER_PROFILE, profile})

type setStatusActionType = {
    type: typeof SET_STATUS
    status:string
}
export const setStatus = (status:string):setStatusActionType => ({type: SET_STATUS, status})

type deletePostActionType = {
    type: typeof DELETE_POST
    postId:number
}
export const deletePost = (postId:number):deletePostActionType => ({type: DELETE_POST, postId})

type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos:photosType
}
export const savePhotoSuccess = (photos: photosType):savePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getProfile = (userId:number) => async (dispatch:any) => {
    let response = await usersAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data))

}
export const getStatus = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}
export const updateStatus = (status:string) => async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile:profileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile',{_error:response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}


export default profileReducer;