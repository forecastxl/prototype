function ClientError(message) {
  this.name = 'ClientError'
  this.message = message || 'Something went wrong but no message was provided'
}

ClientError.prototype = Error.prototype

export default ClientError
