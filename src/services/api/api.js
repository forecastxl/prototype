import checkStatus from './check-status'

export default class Api {
  static get(endpoint, token) {
    const headers = new Headers()

    if (token) {
      headers.append('Authorization', `Bearer ${token}`)
    }

    const init = {
      headers,
      method: 'GET'
    }

    return Api.fetch(new Request(endpoint, init))
  }

  static post(endpoint, data, token) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    })

    if (token) {
      headers.append('Authorization', `Bearer ${token}`)
    }

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
