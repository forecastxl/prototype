import checkStatus from './check-status'
import { store } from '../../index'

export default class Api {
  static get(endpoint) {
    const state = store.getState()
    const token = state.session.token
    const headers = new Headers({
      Authorization: `Bearer ${token}`
    })
    const init = {
      headers,
      method: 'GET'
    }

    return Api.fetch(new Request(endpoint, init))
  }

  static post(endpoint, data) {
    const state = store.getState()
    const token = state.session.token
    const headers = new Headers({
      Authorization: `Bearer ${token}`,
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
