function ClientError({ response, data }) {
  this.name = 'ClientError'
  this.message = response.statusText
  this.data = data
}

ClientError.prototype = Error.prototype

export default ClientError
