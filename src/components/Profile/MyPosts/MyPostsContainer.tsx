import { actions, ProfileInitialStateType } from '../../../redux/profileReducer'
import MyPostsWithMemoHOC from './MyPosts'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/reduxStore'

export type MapStatePropsType = {
  ProfilePage: ProfileInitialStateType
}
export type MapDispatchPropsType = {
  addPost: (postText: string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  ProfilePage: state.ProfilePage,
})

const MyPostsContainer = connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { addPost: actions.addPost })(MyPostsWithMemoHOC)

export default MyPostsContainer
