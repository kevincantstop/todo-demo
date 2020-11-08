import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tasks } from './Task';
import { TaskPanel } from './Panel'
import {
  getTasks,
  addTask,
  updateTasks,
  deleteTasks
} from './api';

const AppContainer = styled.div`
  width: 25rem;
  margin: 1rem auto;
`;

const AppTitle = styled.header`
  font-size: 1.5rem;
`;

const App = () => {
  const [enableDelete, setEnableDelete] = useState(false)
  const [tasks, setTasks] = useState([])
  const getDoneTasks = (data = tasks) => data.filter(i => i.done)

  useEffect(() => {
    getTasks().then(data => {
      setTasks(data)

      setEnableDelete(getDoneTasks(data).length > 0)
    })
  }, [])

  const handleSelectItems = async (items, data) => {
    const updated = await updateTasks(data)
    setTasks(updated)

    setEnableDelete(getDoneTasks().length > 0)
  }

  const handleCreate = async task => {
    if (task) {
      const data = await addTask(task)
      setTasks(data)
    }
  }

  const handleDelete = async () => {
    const doneTasks = getDoneTasks()
    const data = await deleteTasks(doneTasks.map(i => i.id))

    setTasks(data)
    setEnableDelete(getDoneTasks(data).length > 0)
  }

  return (
    <>
      <AppTitle className='title'>
        Tasks
      </AppTitle>
      <TaskPanel onCreate={handleCreate} onDelete={handleDelete} showDelete={enableDelete}/>
      <Tasks items={tasks} onCheckedItems={handleSelectItems}/>
    </>
  );
}

const Boot = () => (
  <AppContainer>
    <App/>
  </AppContainer>
)

export default Boot;
