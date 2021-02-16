import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    ProfilePage:profileReducer,
    DialogsPage:dialogsReducer,
    NavBarPage:navbarReducer,
    UsersPage:usersReducer,
    auth:authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;