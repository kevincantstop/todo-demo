const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3001
let data = []

app.get('/', (req, res) => {
  return res.send(data)
})

app.post('/', (req, res) => {
  let nextId = 1

  if (data.length > 0) {
    nextId = Math.max(...data.map(i => i.id)) + 1
  }
  const task = {
    id: nextId,
    ...req.body
  }
  data.push(task)

  return res.send(data)
})

app.put('/', (req, res) => {
  data = req.body
  return res.send(data)
})

app.delete('/', (req, res) => {
  const ids = req.body

  data = data.filter(i => !ids.includes(i.id))

  return res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})