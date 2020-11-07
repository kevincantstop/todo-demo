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

const Item = ({ id, task, onClick }) => (
  <tr>
    <td><input type="checkbox" value={id} onClick={() => onClick(id)}/></td>
    <td>{task}</td>
  </tr>
)

const Tasks = ({ items, onCheckedItems }) => {
  const selected = new Set()
  const update = id => {
    if (selected.has(id)) {
      selected.delete(id)
    } else {
      selected.add(id)
    }
  }

  const onItemClicked = id => {
    update(id)
    onCheckedItems(Array.from(selected))
  }

  return (
    <Container className='table is-hoverable'>
      <Head />
      <Body>
        {items.map(({ id, task }) => <Item id={id} task={task} key={id} onClick={onItemClicked}/>)}
      </Body>
    </Container>
  )
}

export {
  Tasks
}