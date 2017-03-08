const expeditious = require('expeditious');
const expeditiousMemoryCache = require('expeditious-engine-memory')
const expeditiousMiddleware = require('express-expeditious')
const express = require('express')
const mime = require('mime-types')
const path = require('path')

const app = express()
const oneDay = 24 * 60 * 60 * 1000

// cache instance
const cache = expeditious({
  namespace: 'express',
  defaultTtl: oneDay,
  engine: expeditiousMemoryCache(),
  objectMode: true
})

// caching middleware
const serverSideCache = expeditiousMiddleware({
  expeditious: cache
})

// cache any GET requests that come into our application
app.use(serverSideCache)

// sets max-age to 0 for html
const setCustomCacheControl = (res, assetPath) => {
  if (mime.lookup(assetPath) === 'text/html') {
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

// don't identify as an express server
app.disable('x-powered-by')

// serve all static files from the /public folder
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1y',
  setHeaders: setCustomCacheControl
}))

// serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// listen on port 80
app.listen(8080)
