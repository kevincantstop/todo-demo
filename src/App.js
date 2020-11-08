import React, { useState } from 'react';
import styled from 'styled-components';
import { Tasks } from './Task';
import { TaskPanel } from './Panel'
import { getTasks } from './api';

const AppContainer = styled.div`
  width: 25rem;
  margin: 1rem auto;
`;

const AppTitle = styled.header`
  font-size: 1.5rem;
`;

function App() {
  const tasks = getTasks()
  const [enableDelete, setEnableDelete] = useState(false)

  const onSelectedItems = items => {
    setEnableDelete(items.length > 0)
  }

  return (
    <AppContainer>
      <AppTitle className='title'>
        Tasks
      </AppTitle>
      <TaskPanel onCreate={() => {}} onDelete={() => {}} showDelete={enableDelete}/>
      <Tasks items={tasks} onCheckedItems={onSelectedItems}/>
    </AppContainer>
  );
}

export default App;
