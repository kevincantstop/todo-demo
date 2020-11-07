import React from 'react';
import styled from 'styled-components';
import { Tasks } from './Task';
import { getTasks } from './api'

const AppContainer = styled.div`
  width: 25rem;
  margin: 1rem auto;
`;

const AppTitle = styled.header`
  font-size: 1.5rem;
`;

function App() {
  const tasks = getTasks()

  const onSelectedItems = items => {
    console.log(items)
  }

  return (
    <AppContainer>
      <AppTitle className='title'>
        Tasks
      </AppTitle>
      <Tasks items={tasks} onCheckedItems={onSelectedItems}/>
    </AppContainer>
  );
}

export default App;
