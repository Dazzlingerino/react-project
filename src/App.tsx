import React, { FC, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'

import Login from './components/Login/Login'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/preloader/Preloader'
import store, { AppStateType } from './redux/reduxStore'
import { withSuspense } from './hoc/withSuspense'

// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(
  () => import('./components/Dialogs/DialogsContainer')
)
// import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(
  () => import('./components/Profile/ProfileContainer')
)
type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert('Some error occured')
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors
    )
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={'/profile'} />} />

            <Route path="/dialogs" render={() => <SuspendedDialogs />} />

            <Route
              path="/profile/:userId?"
              render={() => <SuspendedProfile />}
            />

            <Route path="/users" render={() => <UsersContainer />} />

            <Route path="/login" render={() => <Login />} />

            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

const SocialNetworkApp: FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}
export default SocialNetworkApp
