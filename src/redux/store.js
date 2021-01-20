import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";



let store = {
    _state: {
        ProfilePage: {
            newPost: 'Write something here..',
            posts: [
                {id: 1, message: 'Hi! How are you?', likeCount: 30},
                {id: 2, message: 'It\'s my first post', likeCount: 20},
                {id: 3, message: 'It\'s my second post', likeCount: 10},
                {id: 4, message: 'It\'s my third post', likeCount: 45}
            ],
        },
        NavBarPage: {
            friends: [
                {
                    id: 1,
                    name: "Ne Dima",
                    imgURL: 'https://i.pinimg.com/originals/fc/03/42/fc03426a5fac006d576da53970a21403.jpg'
                },
                {
                    id: 2,
                    name: "Ne Koyla",
                    imgURL: 'https://i.pinimg.com/564x/dd/ce/fb/ddcefb732082007032eb8350575150bd.jpg'
                },
                {
                    id: 3,
                    name: "Ne Vanya",
                    imgURL: 'https://i.pinimg.com/564x/c4/f5/8c/c4f58ca7023071184ddacafa6d3d4e32.jpg'
                }
            ]
        },
        DialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: "Ne Dima",
                    imgURL: 'https://i.pinimg.com/originals/fc/03/42/fc03426a5fac006d576da53970a21403.jpg'
                },
                {
                    id: 2,
                    name: "Ne Koyla",
                    imgURL: 'https://i.pinimg.com/564x/dd/ce/fb/ddcefb732082007032eb8350575150bd.jpg'
                },
                {
                    id: 3,
                    name: "Ne Vanya",
                    imgURL: 'https://i.pinimg.com/564x/c4/f5/8c/c4f58ca7023071184ddacafa6d3d4e32.jpg'
                },
                {
                    id: 4,
                    name: "Ne Tema",
                    imgURL: 'https://i.pinimg.com/564x/f3/b0/06/f3b006037ee51e275c99b24b71f1368a.jpg'
                },
                {
                    id: 5,
                    name: "Ne Borya",
                    imgURL: 'https://i.pinimg.com/564x/93/18/96/9318969ff11803d4e069986af7e829e6.jpg'
                },
                {
                    id: 6,
                    name: "Ne Sanya",
                    imgURL: 'https://i.pinimg.com/564x/05/45/00/054500d68367d97b8854cb8ae126f67c.jpg'
                }
            ],
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Yo"},
                {id: 3, message: "Hey"}
            ],
            newMessage: 'Write something here..'
        }
    },
    _callSubscriber() {
        console.log('state')
    },
    getState() {
        return this._state
    },
    /*addMessage() {
        let newMessage = {
            id: 4, message: this._state.DialogsPage.newMessage
        }
        this._state.DialogsPage.messagesData.push(newMessage)
        this._state.DialogsPage.newMessage = '';
        this._callSubscriber(this._state);
    },
    updateNewMessage(text) {
        this._state.DialogsPage.newMessage = text
        this._callSubscriber(this._state);
    },*/
    /*addPost() {
        let newMessage = {
            id: 5, message: this._state.ProfilePage.newPost, likeCount: 0
        }
        this._state.ProfilePage.posts.push(newMessage)
        this._state.ProfilePage.newPost = '';
        this._callSubscriber(this._state);
    },
    updatePostMessage(text) {
        this._state.ProfilePage.newPost = text
        this._callSubscriber(this._state);
    },*/
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.ProfilePage= profileReducer(this._state.ProfilePage,action)
        this._state.DialogsPage= dialogsReducer(this._state.DialogsPage,action)
        this._state.NavBarPage= navbarReducer(this._state.NavBarPage,action)
        this._callSubscriber(this._state)
    }
}

export default store;
