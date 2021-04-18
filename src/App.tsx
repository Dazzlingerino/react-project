import React, { FC } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter,
  Link,
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import UsersPageWithMemoHOC from './components/Users/UsersPage'
import LoginPageWithMemoHOC from './components/Login/Login'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/preloader/Preloader'
import store, { AppStateType } from './redux/reduxStore'
import { withSuspense } from './hoc/withSuspense'
import HeaderWithMemoHOC from './components/Header/Header'
import { QueryParamProvider } from 'use-query-params'
import 'antd/dist/antd.css'
import { Avatar, Col, Layout, Menu, Row } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'
/*import style from './components/Navbar/Navbar.module.css'*/
import Friends from './components/Navbar/Friends/Friends'

import PeopleIcon from '@material-ui/icons/People'
import ForumIcon from '@material-ui/icons/Forum'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import { AppSider } from './components/Header/Sider'

const DialogsContainer = React.lazy(
  () => import('./components/Dialogs/DialogsContainer')
)
const ProfilePage = React.lazy(() => import('./components/Profile/ProfilePage'))
type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfilePage)
const { Header, Sider, Content } = Layout

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
      <Layout>
        <Header style={{padding:'0'}}>
          <Row>
            <Col span={24}>
          <HeaderWithMemoHOC />
            </Col>
          </Row>
        </Header>
        <Layout className="site-layout">
        <Sider trigger={null}><AppSider /></Sider>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to={'/profile'} />}
                />

                <Route path="/dialogs" render={() => <SuspendedDialogs />} />

                <Route
                  path="/profile/:userId?"
                  render={() => <SuspendedProfile />}
                />

                <Route
                  path="/users"
                  render={() => <UsersPageWithMemoHOC pageTitle={'Guys'} />}
                />

                <Route path="/login" render={() => <LoginPageWithMemoHOC />} />

                <Route path="*" render={() => <div>404 NOT FOUND</div>} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      /* <div className="app-wrapper">
         <QueryParamProvider ReactRouterRoute={Route}>
           <HeaderWithMemoHOC />
           <Navbar />
           <div className="app-wrapper-content">
 
           </div>
         </QueryParamProvider>
       </div>*/
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
