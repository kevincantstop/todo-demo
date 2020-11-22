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

app.get('/', async (req, res) => {
  const data = await dispacher.fetchAll()
  return res.send(data)
})

app.post('/', async (req, res) => {
  const data = await dispacher.add(req.body)
  return res.send(data)
})

app.put('/', async (req, res) => {
  const data = await dispacher.update(req.body)
  return res.send(data)
})

app.delete('/', async (req, res) => {
  const data = await dispacher.remove(req.body)
  return res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})