import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import navbarReducer from './navbarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'

let rootReducer = combineReducers({
  UsersPage: usersReducer,
  ProfilePage: profileReducer,
  DialogsPage: dialogsReducer,
  NavBarPage: navbarReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type BaseThunkType<AT extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  AT
>
export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U
}
  ? U
  : never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
