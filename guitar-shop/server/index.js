const cors = require('cors')
const express = require('express')
const app = express()
const port = 8080
//
const bassSvg = require('bass.svg')

app.use(cors())
app.listen(port, () => console.log('listening on', port))

app.get('/', (req, res) => {
  res.send('ahoy')
  console.log('yeah baby')
})
