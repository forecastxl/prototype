import express from 'express'
import path from 'path'
import setHeaders from './set-headers'

const server = express()

// don't identify as an express server
server.disable('x-powered-by')

// serve all static files from the /public folder
server.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: '1y',
    setHeaders
  })
)

// listen on port 80
server.listen(80)
