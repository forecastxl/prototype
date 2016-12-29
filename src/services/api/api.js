import checkStatus from './check-status'

export const getJson = endpoint => {
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
