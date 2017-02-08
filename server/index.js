const express = require('express')

const app = express()

// serve all static files in the project folder
app.use(express.static(__dirname))

// disable header which identifies this server as an express server
app.disable('x-powered-by')

// serve the index.html on the login route
app.get('*', (req, res) => {
  res.sendFile('/index.html')
})

// start the server on port 80
app.listen(80)
