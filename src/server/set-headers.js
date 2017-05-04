const mime = require('mime-types')

// Changes headers for html responses to a max-age of 0
const setHeaders = (res, assetPath) => {
  if (mime.lookup(assetPath) === 'text/html') {
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

module.exports = setHeaders
