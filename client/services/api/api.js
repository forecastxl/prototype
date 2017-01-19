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

  static async fetch(request) {
    try {
      const response = await fetch(request)
      const data = await response.json()

      // return the data if the response was ok
      if (response.ok) return { data }

      // otherwise return an error with the error data
      const error = new Error(response.statusText)
      if (data.errors) error.errors = data.errors

      throw error
    } catch (error) {
      return { error }
    }
  }
}
