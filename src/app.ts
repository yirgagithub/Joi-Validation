import express from 'express'
import bodyParser from 'body-parser'
const router = require('./routes')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// load app middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
