import checkStatus from './check-status'

export const getJson = endpoint => {
  if (!endpoint) throw new Error('An endpoint must be passed')

  const headers = new Headers({
    Authorization: `Bearer ${process.env.NODE_ENV}`
  })

  const init = {
    headers,
    method: 'GET'
  }

  const request = new Request(endpoint, init)

  return fetch(request)
    .then(checkStatus)
    .then(response => response.json())
    .then(json => ({ response: json }))
    .catch(error => ({ error }))
}

export const postJson = (endpoint, data) => {
  if (!endpoint) throw new Error('An endpoint must be passed')
  if (!data) throw new Error('Data must be passed')

  const headers = new Headers({
    Authorization: `Bearer ${process.env.NODE_ENV}`,
    'Content-Type': 'application/json'
  })

  const init = {
    body: JSON.stringify(data),
    headers,
    method: 'POST'
  }

  const request = new Request(endpoint, init)

  return fetch(request)
    .then(checkStatus)
    .then(response => response.json())
    .then(json => ({ response: json }))
    .catch(error => ({ error }))
}
