const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const Dispatcher = require('./dispatch')
const { port } = require('../src/config')

const { REST_INSTANCES } = process.env

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const dispacher = new Dispatcher()

app.get('/instances', (req, res) => {
  return res.send({
    rest_count: REST_INSTANCES,
    rest_ports: dispacher.ports()
  })
})

app.get('/', (req, res) => {
  const data = dispacher.fetchAll()
  return res.send(data)
})

app.post('/', (req, res) => {
  const data = dispacher.add(req.body)
  return res.send(data)
})

app.put('/', (req, res) => {
  const data = dispacher.update(req.body)
  return res.send(data)
})

app.delete('/', (req, res) => {
  const data = dispacher.remove(req.body)
  return res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})