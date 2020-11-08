const store = require('./store')

describe('Store Test', () => {
  test('add a task to empty store task id = 1', () => {
    const item = {
      task: 'task 1',
      done: false
    }

    store.add(item)

    expect(store.fetch()).toEqual([{
      id: 1,
      ...item
    }])
  })

  test('add multiple tasks task id should be auto-increment', () => {
    store.clear()

    const item1 = {
      task: 'task 1',
      done: false
    }
    const item2 = {
      task: 'task 2',
      done: false
    }

    store.add(item1)
    store.add(item2)

    expect(store.fetch()).toEqual([
      {
        id: 1,
        ...item1
      },
      {
        id: 2,
        ...item2
      }])
  })

  test('tasks can be deleted by id[array] from store', () => {
    store.clear()

    const item1 = {
      task: 'task 1',
      done: false
    }

    store.add(item1)
    store.remove([1])
    expect(store.fetch()).toEqual([])
  })

  test('data store can be successfully updated', () => {
    store.clear()

    const items = [
      {
        id: 1,
        task: 'task 1',
        done: false
      }
    ]

    store.update(items)

    expect(store.fetch()).toEqual(items)
  })
})