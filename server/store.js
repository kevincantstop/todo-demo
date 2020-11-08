let data = []

module.exports = {
  fetch: () => data,
  add: created => {
    let nextId = 1

    if (data.length > 0) {
      nextId = Math.max(...data.map(i => i.id)) + 1
    }
    const task = {
      id: nextId,
      ...created
    }
    data.push(task)
  },
  update: updated => {
    data = updated
  },
  remove: ids => {
    data = data.filter(i => !ids.includes(i.id))
  }
}