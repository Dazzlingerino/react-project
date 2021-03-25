const ADD_MESSAGE = 'ADD-MESSAGE';
type dialogType = {
    id: number
    name: string
    imgURL: string | null
}
type messageType = {
    id: number
    message: string
}

let initialState = {
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
    ] as Array<dialogType>,
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Hey"}
    ] as Array<messageType>
}
export type DialogsInitialStateType = typeof initialState


const dialogsReducer = (state = initialState, action: any): DialogsInitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = action.message
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: newMessage}]
            }
        }

        default:
            return state;
    }
}
type addMessageActionType = {
    type: typeof ADD_MESSAGE
    message: string
}
export const addMessage = (message: string): addMessageActionType => ({type: ADD_MESSAGE, message})

export default dialogsReducer;