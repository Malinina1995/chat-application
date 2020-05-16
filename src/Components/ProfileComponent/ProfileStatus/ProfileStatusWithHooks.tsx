import React, {useState, useEffect, ChangeEvent} from "react";
import "./ProfileStatus.css"
import {UpdateUserStatusHandler} from "../profileConnector";

type ProfileStatusWithHooksPropsType = {
  status: string;
  isOwner: boolean;
  updateStatus: UpdateUserStatusHandler
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusWithHooksPropsType> = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    props.isOwner ? setEditMode(true) : setEditMode(false);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className='profile-status'>
      {!editMode ? (
        <div onDoubleClick={activateEditMode}>
          {props.status || "No status"}
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
