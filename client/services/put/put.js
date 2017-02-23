import fetch from '../fetch'
import decamelize from '../decamelize'

const put = (endpoint, data, token) => {
  if (data && typeof data !== 'object') {
    throw new Error('The data argument must be an object')
  }

  const options = {
    body: JSON.stringify(decamelize(data)),
    method: 'PUT'
  }
  let headers = {
    'Content-Type': 'application/json'
  }

  if (token) {
    headers = { ...headers, Authorization: `Bearer ${token}` }
    return fetch(endpoint, headers, options)
  }

  return fetch(endpoint, headers, options)
}

export default put

