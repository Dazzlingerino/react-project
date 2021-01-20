import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

let reducers = combineReducers({
    ProfilePage:profileReducer,
    DialogsPage:dialogsReducer,
    NavBarPage:navbarReducer
})

let store = createStore(reducers);

export default store;