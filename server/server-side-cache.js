const expeditious = require('expeditious')
const engine = require('expeditious-engine-memory')
const middleware = require('express-expeditious')

// cache responses for a day (in milliseconds)
const ttl = 24 * 60 * 60 * 1000

// cache instance
const cache = expeditious({
  namespace: 'express',
  defaultTtl: ttl,
  engine: engine(),
  objectMode: true
})

// caching middleware
const serverSideCache = middleware({
  expeditious: cache
})

module.exports = serverSideCache
