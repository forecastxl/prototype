import checkStatus from './check-status'

export default class Api {
  static get(endpoint) {
    const headers = new Headers({
      Authorization: `Bearer ${process.env.NODE_ENV}`
    })
    const init = {
      headers,
      method: 'GET'
    }

    return Api.fetch(new Request(endpoint, init))
  }

  static post(endpoint, data) {
    const headers = new Headers({
      Authorization: `Bearer ${process.env.NODE_ENV}`,
      'Content-Type': 'application/json'
    })
    const init = {
      body: JSON.stringify(data),
      headers,
      method: 'POST'
    }

    return Api.fetch(new Request(endpoint, init))
  }

  static fetch(request) {
    return fetch(request)
      .then(checkStatus)
      .then(response => response.json())
      .then(json => ({ response: json }))
      .catch(error => ({ error }))
  }
}
