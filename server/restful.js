const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000
const data = []

app.get('/', (req, res) => {
  return res.send(data)
})

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method')
})

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method')
})

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})