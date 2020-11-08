const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const store = require('./store')
const { port } = require('../src/config')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.send(store.fetch())
})

app.post('/', (req, res) => {
  store.add(req.body)
  return res.send(store.fetch())
})

app.put('/', (req, res) => {
  store.update(req.body)
  return res.send(store.fetch())
})

app.delete('/', (req, res) => {
  store.remove(req.body)
  return res.send(store.fetch())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})