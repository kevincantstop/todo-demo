import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.table`
  padding: 0 0.5rem;
  width: 25rem;
`;

const Head = () => (
  <thead>
  <tr>
    <th>#</th>
    <th>Task Name</th>
  </tr>
  </thead>
)
const Body = ({ children }) => <tbody>{children}</tbody>

const Item = ({ id, checked, task, onClick }) => (
  <tr>
    <td><input type="checkbox" checked={checked} onChange={() => onClick(id)}/></td>
    <td>{task}</td>
  </tr>
)

const Tasks = ({ items, onCheckedItems }) => {
  const [tasks, setTasks] = useState(items)

  const onItemClicked = id => {
    setTasks(tasks.map(i => {
      if (i.id === id) {
        i.done = !i.done
      }
      return i
    }))

    onCheckedItems(tasks.reduce((r, i) => {
      if (i.done) {
        r.push(i.id)
      }
      return r
    }, []))
  }

  return (
    <Container className='table is-hoverable'>
      <Head/>
      <Body>
        {tasks.map(({id, task, done}) => (
          <Item id={id} checked={done} task={task} key={id} onClick={onItemClicked}/>
        ))
        }
      </Body>
    </Container>
  )
}

export {
  Tasks
}