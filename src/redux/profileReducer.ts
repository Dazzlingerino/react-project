import {ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {profileAPI} from "../api/profile-api";


let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likeCount: 30},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
        {id: 3, message: 'It\'s my second post', likeCount: 10},
        {id: 4, message: 'It\'s my third post', likeCount: 45}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    postMessageBody: '',
}


const profileReducer = (state = initialState, action: ActionsTypes): ProfileInitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD_POST': {
            let newMessage = action.postText
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: newMessage, likeCount: 5}],
            }
        }
        case 'SN/PROFILE/DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            }
        }
        case 'SN/PROFILE/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SN/PROFILE/SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }
}


export const actions = {
    addPost: (postText: string) => ({type: 'SN/PROFILE/ADD_POST', postText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}


export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(actions.setUserProfile(data))

}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))

}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)

        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setStatus(status))
        }
    } catch (error) {

    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await profileAPI.saveProfile(profile)
    if (data.resultCode === ResultCodesEnum.Success) {
        if (userId !== null) {
            await dispatch(getProfile(userId))
        } else {
            throw new Error('userId cannot be null')
        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}


export default profileReducer;
export type ProfileInitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>