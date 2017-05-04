import path from 'path'
import express from 'express'
import setHeaders from './set-headers'

const server = express()

// Don't identify as an express server
server.disable('x-powered-by')

// Serve all static files from the public folder
server.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: '1y',
    setHeaders
  })
)

// Serve index.html for all routes
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Listen on port 80
server.listen(80)
