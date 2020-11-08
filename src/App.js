import React, { useState } from 'react';
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

function App() {
  const [enableDelete, setEnableDelete] = useState(false)
  const [selected, setSelected] = useState([])
  const [tasks, setTasks] = useState(getTasks())

  const handleSelectItems = (items, data) => {
    setEnableDelete(items.length > 0)

    setSelected(items)
    setTasks(updateTasks(data))
  }

  const handleCreate = task => {
    if (task) {
      setTasks(addTask(task))
    }
  }

  const handleDelete = () => {
    setTasks(deleteTasks(selected))
  }

  return (
    <AppContainer>
      <AppTitle className='title'>
        Tasks
      </AppTitle>
      <TaskPanel onCreate={handleCreate} onDelete={handleDelete} showDelete={enableDelete}/>
      <Tasks items={tasks} onCheckedItems={handleSelectItems}/>
    </AppContainer>
  );
}

export default App;
