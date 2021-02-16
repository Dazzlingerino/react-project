import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-POST-MESSAGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    newPost: 'Write something here..',
    posts: [
        {id: 1, message: 'Hi! How are you?', likeCount: 30},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
        {id: 3, message: 'It\'s my second post', likeCount: 10},
        {id: 4, message: 'It\'s my third post', likeCount: 45}
    ],
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newMessage = state.newPost
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: newMessage, likeCount: 5}],
                newPost: ''
            }
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPost: action.text
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPost = (text) => ({type: UPDATE_NEW_POST, text: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId)
        .then(response => {
                dispatch(setUserProfile(response.data))
            }
        )
}


export default profileReducer;