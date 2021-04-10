import React, { ChangeEvent, FC, useState } from 'react'
import Preloader from '../../common/preloader/Preloader'
import { ContactsType, ProfileType } from '../../../types/types'
import userPhoto from '../../../assets/images/user.png'
import ProfileDataFormReduxForm from './ProfileStatus/ProfileDataForm'
import s from './ProfileInfo.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../../redux/profileSelectors'
import { savePhoto, saveProfile } from '../../../redux/profileReducer'

type Props = {
  isOwner: boolean
}
const ProfileInfo: FC<Props> = ({ isOwner }) => {
  const profile = useSelector(getProfile)

  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(savePhoto(e.target.files[0]))
    }
  }
  const onSubmit = async (formData: ProfileType) => {
    dispatch(saveProfile(formData))
    await setEditMode(false)
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
