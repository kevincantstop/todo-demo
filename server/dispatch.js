const fetch = require('node-fetch')
const { restfulHost } = require('../src/config')
let { REST_INSTANCES, REST_PORT } = process.env

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

class Dispatcher {
  ports() {
    return Array(parseInt(REST_INSTANCES)).fill(parseInt(REST_PORT)).map((p, i) => p + i)
  }

  urls(action = '') {
    return this.ports().map(port => `http://${restfulHost}:${port}/${action}`)
  }

  clusterId() {
    return rand(0, parseInt(REST_INSTANCES) - 1)
  }

  async request(url, options = null) {
    const response = await fetch(url, options)
    return response.json()
  }

  async fetchAll() {
    return this.urls().reduce(async (r, url) => {
      const data = await this.request(url, { method: 'GET' })
      return [...(await r), ...data]
    }, Promise.resolve([]))
  }

  async add(task) {
    const cluster = this.clusterId()
    const host = this.urls()[cluster]

    await this.request(host, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: `task-${cluster}`,
        ...task
      })
    })

    return this.fetchAll()
  }
}

module.exports = Dispatcher