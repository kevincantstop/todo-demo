let data = []
let nextId = 1

module.exports = {
  clear: () => {
    data = []
    nextId = 1
  },
  fetch: () => data,
  add: created => {
    created.id = `${created.id}-${nextId}`
    nextId++

    data.push(created)
    return data
  },
  update: ids => {
    for (let item of data) {
      if (ids.includes(item.id)) {
        item.done = !item.done
      }
    }

    return data
  },
  remove: ids => {
    data = data.filter(i => !ids.includes(i.id))
  }
}