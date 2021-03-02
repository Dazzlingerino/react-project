import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: true,
    isFetching: true
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login,isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login,isAuth}})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getAuthUserData = () => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.me()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(toggleIsFetching(false))
                        let {id, email, login} = response.data.data;
                        dispatch(setAuthUserData(id, email, login,true))
                    }
                }
            )
    }
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())

                }
            }
        )
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null,false))

                }
            }
        )
}
export default authReducer;