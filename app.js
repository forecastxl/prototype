const express = require('express')

const app = express()

// Redirect the root path to the login screen.
app.get('/', (req, res) => {
  res.redirect('/login')
})

// Serve the index.html on the login route.
app.get('/login', (req, res) => {
  res.sendFile('/index.html')
})

// Serve all static file in the project folder.
app.use(express.static(__dirname))

// Start the server on port 80.
app.listen(80)
