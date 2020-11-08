import React from 'react';

const TaskPanel = () => {
  return (
    <div className="field is-grouped">
      <div className="field has-addons mx-1">
        <div className="control">
          <input className="input" type="text" placeholder="Task Name" />
        </div>
        <div className="control">
          <a className="button is-info">
            New
          </a>
        </div>
      </div>
      <p className="control">
        <a className="button is-danger">
          Delete
        </a>
      </p>
    </div>
  )
}

export {
  TaskPanel
}