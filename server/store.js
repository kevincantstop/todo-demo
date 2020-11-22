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
  update: updated => {
    data = updated
  },
  remove: ids => {
    data = data.filter(i => !ids.includes(i.id))
  }
}