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
  const [selected, setSelected] = useState([])
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks().then(data => {
      setTasks(data)
    })
  }, [])

  const handleSelectItems = async (items, data) => {
    setEnableDelete(items.length > 0)

    setSelected(items)

    const updated = await updateTasks(data)
    setTasks(updated)
  }

  const handleCreate = async task => {
    if (task) {
      const data = await addTask(task)
      setTasks(data)
    }
  }

  const handleDelete = async () => {
    const data = await deleteTasks(selected)
    setTasks(data)
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
