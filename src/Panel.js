import React, { useState } from 'react';
import styled from 'styled-components';

const DeleteButton = styled.a`
  visibility: ${p => p.visible ? 'visible' : 'hidden'};
`;

const TaskPanel = ({ onCreate, onDelete, showDelete = false }) => {
  const [taskName, setTaskName] = useState('')

  const handleTaskNameChanged = e => {
    setTaskName(e.target.value)
  }

  return (
    <div className="field is-grouped">
      <div className="field has-addons mx-1">
        <div className="control">
          <input className="input" type="text" placeholder="Task Name" value={taskName} onChange={handleTaskNameChanged}/>
        </div>
        <div className="control">
          <a className="button is-info" onClick={() => onCreate(taskName)}>
            New
          </a>
        </div>
      </div>
      <p className="control">
        <DeleteButton className="button is-danger" visible={showDelete} onClick={onDelete}>
          Delete
        </DeleteButton>
      </p>
    </div>
  )
}

export {
  TaskPanel
}