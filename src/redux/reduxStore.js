import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    ProfilePage:profileReducer,
    DialogsPage:dialogsReducer,
    NavBarPage:navbarReducer,
    UsersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;