import React, {FC, useState, useEffect, ChangeEvent} from 'react';

type Props ={
status:string
    updateStatus:(status:string) => void
}
const ProfileStatusWithHooks:FC<Props> = (props) => {

    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChangeStatus = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || "no status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    autoFocus={true} onChange={onChangeStatus} value={status} onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    )

}
export default ProfileStatusWithHooks