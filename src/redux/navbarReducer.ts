type friendType = {
    id: number
    name: string
    imgURL: string
}

let initialState = {
    friends: [] as Array<friendType>,
}
export type initialStateType = typeof initialState

let navbarState: initialStateType = {
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
}
const navbarReducer = (state = navbarState, action: any) => {
    return state;

}


export default navbarReducer;