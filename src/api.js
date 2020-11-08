let data = []

const url = 'http://localhost:3001/'

const getTasks = async () => {
  const response = await fetch(url, {
    method: 'GET'
  })
  data = response.json()
  return data
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

  data = response.json()
  return data
}

const updateTasks = async tasks => {
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(tasks),
    headers: {
      'Content-Type': 'application/json'
    },
  })

  data = response.json()
  return data
}

const deleteTasks = async tasksIds => {
  await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(tasksIds),
    headers: {
      'Content-Type': 'application/json'
    },
  })

  data = data.filter(i => !tasksIds.includes(i.id))
  return data
}

export {
  getTasks,
  addTask,
  updateTasks,
  deleteTasks
}