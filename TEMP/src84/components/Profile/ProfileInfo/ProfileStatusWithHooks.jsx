import React, {useState} from "react";

const ProfileStatusWithHooks = (props) =>  {

    //let stateWithSetState = useState(false);
    //let editMode = stateWithSetState[0];
    //let setEditMode = stateWithSetState[1];

    //destructured assignment
    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    const activateEditMode = () =>
    {
        setEditMode(true);
    }

    const deactivateEditMode = () =>
    {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) =>
    {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {! editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || "empty"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;