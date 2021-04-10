import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, getStatus } from '../../redux/profileReducer'
import { useHistory, useParams } from 'react-router-dom'
import { getAuthorizedUserId } from '../../redux/authSelectors'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileStatusWithHooks from './ProfileInfo/ProfileStatus/ProfileStatusWithHooks'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const ProfilePage: FC = () => {
  let { userId } = useParams<{ userId: string }>()
  const history = useHistory()
  const authorizedUserId = useSelector(getAuthorizedUserId)
  const dispatch = useDispatch()
  const refreshProfile = () => {
    let convertedUserId: number | null = +userId
    if (!convertedUserId) {
      convertedUserId = authorizedUserId
      if (!convertedUserId) {
        history.push('/login')
      }
    }
    if (!convertedUserId) {
      console.error('ID must be in URI params or in state(authorizedUserId)')
    } else {
      dispatch(getProfile(convertedUserId))
      dispatch(getStatus(convertedUserId))
    }
  }
  useEffect(() => {
    refreshProfile()
  }, [userId])

  return (
    <div className={s.profile}>
      <ProfileInfo isOwner={!authorizedUserId} />
      <ProfileStatusWithHooks />
      <MyPostsContainer />
    </div>
  )
}
export default ProfilePage
