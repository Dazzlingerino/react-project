import React, {useState, useEffect} from 'react';


const ProfileStatusWithHooks = (props) => {

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
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    console.log(props)
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