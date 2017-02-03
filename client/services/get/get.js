import fetch from '../fetch'

const get = (endpoint, token) => {
  const options = { method: 'GET' }

  if (token) {
    const headers = { Authorization: `Bearer ${token}` }
    return fetch(endpoint, headers, options)
  }

  return fetch(endpoint, null, options)
}

export default get
