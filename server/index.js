const express = require('express')

const app = express()

// redirect the root path to the login screen
app.get('/', (req, res) => {
  res.redirect('/login')
})

// serve the index.html on the login route
app.get('/login', (req, res) => {
  res.sendFile('/index.html')
})

// serve all static file in the project folder
app.use(express.static(__dirname))

// start the server on port 80
app.listen(80)
