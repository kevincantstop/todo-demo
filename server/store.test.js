const store = require('./store')

describe('Store Test', () => {
  beforeEach(() => {
    store.clear()
  })

  test('add a task to empty store task id = 1', () => {
    const item = {
      id: 'task-1',
      task: 'task 1',
      done: false
    }

    store.add(item)

    expect(store.fetch()).toEqual([{
      id: 'task-1-1',
      ...item
    }])
  })

  test('add multiple tasks task id should be auto-increment', () => {
    const item1 = {
      id: 'task-1',
      task: 'task 1',
      done: false
    }
    const item2 = {
      id: 'task-1',
      done: false
    }

    store.add(item1)
    store.add(item2)

    expect(store.fetch()).toEqual([
      {
        id: 'task-1-1',
        ...item1
      },
      {
        id: 'task-1-2',
        ...item2
      }])
  })

  test('tasks can be deleted by id[array] from store', () => {
    const item1 = {
      id: 'task-1',
      task: 'task 1',
      done: false
    }

    store.add(item1)
    store.remove(['task-1-1'])
    expect(store.fetch()).toEqual([])
  })

  test('data store can be successfully updated', () => {
    const items = [
      {
        id: 'task-1-1',
        task: 'task 1',
        done: false
      }
    ]

    store.update(items)

    expect(store.fetch()).toEqual(items)
  })
})