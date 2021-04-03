import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
  getProfile,
  getStatus,
  savePhoto,
  saveProfile,
  updateStatus,
} from '../../redux/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { AppStateType } from '../../redux/reduxStore'
import { ProfileType } from '../../types/types'

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  getProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}
type PathParamsType = {
  userId: string
}

type PropsType = MapPropsType &
  DispatchPropsType &
  RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    if (!userId) {
      console.error('ID must be in URI params or in state(authorizedUserId)')
    } else {
      this.props.getProfile(userId)
      this.props.getStatus(userId)
    }
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(
    prevProps: PropsType,
    prevState: PropsType,
    snapshot?: any
  ) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        saveProfile={this.props.saveProfile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    )
  }
}

let mapStateToProps = (state: AppStateType) => ({
  profile: state.ProfilePage.profile,
  status: state.ProfilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
})
export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer)
