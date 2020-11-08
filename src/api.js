import { port } from '../server/config'

const url = `http://localhost:${port}/`

const getTasks = async () => {
  const response = await fetch(url, {
    method: 'GET'
  })
  return response.json()
}

const addTask = async task => {
  const created = { task, done: false }

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(created),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  return response.json()
}

const updateTasks = async tasks => {
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(tasks),
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return response.json()
}

const deleteTasks = async tasksIds => {
  const response = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(tasksIds),
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return response.json()
}

export {
  getTasks,
  addTask,
  updateTasks,
  deleteTasks
}