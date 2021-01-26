const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-POST-MESSAGE';

let initialState = {
    newPost: 'Write something here..',
    posts: [
        {id: 1, message: 'Hi! How are you?', likeCount: 30},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
        {id: 3, message: 'It\'s my second post', likeCount: 10},
        {id: 4, message: 'It\'s my third post', likeCount: 45}
    ],
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
        default:
            return state;
    }
}

export const ADD_POST_ACTION_CREATOR = () => ({type: ADD_POST})
export const UPDATE_NEW_POST_ACTION_CREATOR = (text) => ({type: UPDATE_NEW_POST, text: text})

export default profileReducer;