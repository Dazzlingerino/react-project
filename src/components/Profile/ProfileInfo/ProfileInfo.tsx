import React, { FC, ChangeEvent, useState } from 'react'
import Preloader from '../../common/preloader/Preloader'
import { ContactsType, ProfileType } from '../../../types/types'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'
import ProfileDataFormReduxForm from './ProfileStatus/ProfileDataForm'
import s from './ProfileInfo.module.css'
type Props = {
  profile: ProfileType | null
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => void
}
const ProfileInfo: FC<Props> = ({
  profile,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false)
  if (!profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0])
    }
  }
  const onSubmit = (formData: ProfileType) => {
    // @ts-ignore
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataFormReduxForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true)
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}
      </div>
    </div>
  )
}
type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}
const ProfileData: FC<ProfileDataPropsType> = ({
  profile,
  isOwner,
  goToEditMode,
}) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <b>Full name</b>:{profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>:{profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>:{profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>:{profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key as keyof ContactsType]}
            />
          )
        })}
      </div>
    </div>
  )
}
type ContactPropsType = {
  contactTitle: string
  contactValue: string
}
const Contact: FC<ContactPropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  )
}
export default ProfileInfo
