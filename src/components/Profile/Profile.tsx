import React, { FC } from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import ProfileStatusWithHooks from './ProfileInfo/ProfileStatus/ProfileStatusWithHooks'
import { ProfileType } from '../../types/types'
import MyPostsContainer from './MyPosts/MyPostsContainer'

type Props = {
  profile: ProfileType | null
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => void
  updateStatus: (status: string) => void
  status: string
}
const Profile: FC<Props> = ({
  isOwner,
  profile,
  status,
  updateStatus,
  savePhoto,
  saveProfile,
}) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        profile={profile}
        savePhoto={savePhoto}
        isOwner={isOwner}
        saveProfile={saveProfile}
      />
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <MyPostsContainer />
    </div>
  )
}
export default Profile
