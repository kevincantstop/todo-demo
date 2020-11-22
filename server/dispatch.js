const { restfulHost } = require('../src/config')
const { REST_INSTANCES, REST_PORT } = process.env

class Dispatcher {
  ports() {
    return Array(parseInt(REST_INSTANCES)).fill(parseInt(REST_PORT)).map((p, i) => p + i)
  }
}

module.exports = Dispatcher