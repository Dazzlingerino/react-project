import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStatus } from '../../../../redux/profileSelectors'
import { updateStatus } from '../../../../redux/profileReducer'

const ProfileStatusWithHooks: FC = () => {
  const [status, setStatus] = useState(useSelector(getStatus))
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setStatus(status)
  }, [status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    dispatch(updateStatus(status))
  }
  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{status || 'no status'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onChange={onChangeStatus}
            value={status}
            onBlur={deactivateEditMode}
          />
        </div>
      )}
    </div>
  )
}
export default ProfileStatusWithHooks
