const fetch = require('node-fetch')
const { restfulHost } = require('../src/config')

const { REST_INSTANCES, REST_PORT } = process.env
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

class Dispatcher {
  ports() {
    return Array(parseInt(REST_INSTANCES)).fill(parseInt(REST_PORT)).map((p, i) => p + i)
  }

  urls(action = '') {
    return this.ports().map(port => `http://${restfulHost}:${port}/${action}`)
  }

  clusters() {
    return Array(parseInt(REST_INSTANCES)).fill(0).map((_, i) => i)
  }

  clusterId() {
    return rand(0, parseInt(REST_INSTANCES) - 1)
  }

  async request(url, options) {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json'
      },
    })
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
      body: JSON.stringify({
        id: `task-${cluster}`,
        ...task
      })
    })

    return this.fetchAll()
  }

  async remove(ids) {
    await this.update(ids, 'DELETE')
    return this.fetchAll()
  }

  async update(ids, method='PUT') {
    const items = this.clusters()
    const hosts = this.urls()

    for (let clusterId of items) {
      await this.request(hosts[clusterId], {
        method,
        body: JSON.stringify(ids.filter(id => parseInt(id.split('-')[1]) === clusterId))
      })
    }

    return this.fetchAll()
  }
}

module.exports = Dispatcher

