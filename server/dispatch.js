const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { port } = require('../src/config')

const { REST_INSTANCES, REST_PORT } = process.env

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const restPorts = Array(parseInt(REST_INSTANCES)).fill(parseInt(REST_PORT)).map((p, i) => p + i)

app.get('/instances', (req, res) => {
  return res.send({
    rest_count: REST_INSTANCES,
    rest_ports: restPorts
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})