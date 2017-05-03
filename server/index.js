const express = require('express')
const path = require('path')
const setHeaders = require('./set-headers')

const app = express()

// don't identify as an express server
app.disable('x-powered-by')

// serve all static files from the /public folder
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1y',
  setHeaders: setHeaders
}))

// serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// listen on port 80
app.listen(80)




