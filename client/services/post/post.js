import fetch from '../fetch'
import decamelize from '../decamelize'

const post = (endpoint, data, token) => {
  if (!data) {
    throw new Error('There must be a data argument')
  }

  if (data && typeof data !== 'object') {
    throw new Error('The data argument must be an object')
  }

  const options = {
    body: JSON.stringify(decamelize(data)),
    method: 'POST'
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

export default post

