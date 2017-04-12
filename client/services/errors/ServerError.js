function ServerError(message) {
  this.name = 'ServerError'
  this.message = message || 'Something went wrong but no message was provided'
}

ServerError.prototype = Error.prototype

export default ServerError
