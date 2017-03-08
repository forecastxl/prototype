const path = require('path')
const express = require('express')
const cache = require('cache-control')

const app = express()

app.use(cache({
  // don't cache html
  '/**/*.html': 'public, max-age=0',
  // cache all other files for a year
  '/**': '1y'
}))

// don't identify as an express server
app.disable('x-powered-by')

// serve all static files from the /public folder
app.use(express.static(path.join(__dirname, 'public')))

// serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// listen on port 80
app.listen(80)
