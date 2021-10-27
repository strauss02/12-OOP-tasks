const cors = require('cors')
const express = require('express')
const app = express()
const port = 8080
//

app.use(cors())
app.listen(port, () => console.log('listening on', port))

app.get('/', (req, res) => {
  res.send('ahoy')
  console.log('yeah baby')
})
