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

const profileReducer =(state = initialState,action) => {
    switch (action.type){
        case ADD_POST:
            let newMessage = {
                id: 5, message: state.newPost, likeCount: 0
            }
            state.posts.push(newMessage)
            state.newPost = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPost = action.text
            return state;
        default:
            return state;
    }
}

export const ADD_POST_ACTION_CREATOR = () => ({type: ADD_POST})
export const UPDATE_NEW_POST_ACTION_CREATOR = (text) => ({type: UPDATE_NEW_POST, text: text})

export default profileReducer;