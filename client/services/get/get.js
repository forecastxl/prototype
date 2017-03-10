import fetch from '../fetch'

const get = (endpoint, token) => {
  const options = { method: 'GET' }

  if (token) {
    const headers = { Authorization: `Bearer ${token}` }
    // fetch is polyfilled with isomorphic-fetch
    // eslint-disable-next-line compat/compat
    return fetch(endpoint, headers, options)
  }

  // eslint-disable-next-line compat/compat
  return fetch(endpoint, null, options)
}

export default get
