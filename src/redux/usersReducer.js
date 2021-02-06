const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT= 'SET_USERS_TOTAL_COUNT';

let initialState = {
        users: [
       /* {id: 1, photoURL: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
            followed: true, fullName: 'Andrei K', status: 'im a boss', location: { city:'Kiev', country:'Ukraine'}},
        {id: 2, photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            followed: false, fullName: 'Vasya k', status: 'im a boss too', location: { city:'Minsk', country:'Belarus'}},
        {id: 3, photoURL: 'https://besthqwallpapers.com/Uploads/5-8-2018/60391/thumb2-joseph-morgan-english-actor-photoshoot-handsome-man-portrait.jpg',
            followed: true, fullName: 'Valeriy B', status: 'im a dad ', location: { city:'Kiev', country:'Ukraine'}},
        {id: 4, photoURL: 'https://img.freepik.com/free-photo/handsome-business-man-posing-front-view_23-2148336822.jpg?size=626&ext=jpg&ga=GA1.2.145878890.1611360000',
            followed: false, fullName: 'Andrei T', status: 'im a biggy', location: { city:'Moscow', country:'Russia'}},*/
    ],
    pageSize:5,
    totalUsersCount: 0,
    currentPage:1
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u =>{
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
            case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.currentPage
            }
            case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount:action.totalCount
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;