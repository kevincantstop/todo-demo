let data = [
  {id: 1, task: 'Task 1', done: false},
  {id: 2, task: 'Task 2', done: false},
  {id: 3, task: 'Task 3', done: false},
  {id: 4, task: 'Task 4', done: false},
]

const getTasks = () => data

const addTask = task => {
  const nextId = Math.max(...data.map(i => i.id)) + 1
  data.push({ id: nextId, task, done: false })
  data = [...data]

  return data
}

const updateTasks = tasks => {
  data = tasks
  return data
}

const deleteTasks = tasksIds => {
  data = data.filter(i => !tasksIds.includes(i.id))
  return data
}

export {
  getTasks,
  addTask,
  updateTasks,
  deleteTasks
}