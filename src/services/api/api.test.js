import 'isomorphic-fetch'
import Api from './api'

describe('api service', () => {
  describe('get', () => {
    beforeEach(() => {
      window.fetch = jest.fn()
    })

    it('should return the destringified response if it is ok', () => {
      const response = { data: ['data'] }
      const body = JSON.stringify(response)
      const init = { status: 200, statusText: 'OK' }
      const expected = { response }

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return Api.get('endpoint').then(actual => expect(actual).toEqual(expected))
    })

    it('should return an error if the response is not ok', () => {
      const body = JSON.stringify({})
      const init = { status: 401, statusText: 'Unauthorized' }
      const error = new Error(init.statusText)
      const expected = { error }

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return Api.get('endpoint').then(actual => expect(actual).toEqual(expected))
    })

    it('should return an error on network errors', () => {
      const message = 'No network connection'
      const error = new Error(message)
      const expected = { error }

      window.fetch.mockImplementationOnce(() => Promise.reject(new Error(message)))
      return Api.get('endpoint').then(actual => expect(actual).toEqual(expected))
    })
  })

  describe('post', () => {
    beforeEach(() => {
      window.fetch = jest.fn()
    })

    it('should post stringified data', () => {
      const init = { status: 200, statusText: 'OK' }
      const data = { data: 'data' }
      const expected = JSON.stringify(data)

      window.fetch.mockImplementationOnce(
        request => Promise.resolve(new Response(JSON.stringify(request.body), init))
      )
      return Api.post('endpoint', data).then(({ response }) => expect(response).toEqual(expected))
    })

    it('should return the destringified response if it is ok', () => {
      const response = { data: ['data'] }
      const body = JSON.stringify(response)
      const init = { status: 200, statusText: 'OK' }
      const expected = { response }

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return Api.post('endpoint', 'data').then(actual => expect(actual).toEqual(expected))
    })

    it('should return an error if the response is not ok', () => {
      const body = JSON.stringify({})
      const init = { status: 401, statusText: 'Unauthorized' }
      const error = new Error(init.statusText)
      const expected = { error }

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return Api.post('endpoint', 'data').then(actual => expect(actual).toEqual(expected))
    })

    it('should return an error on network errors', () => {
      const message = 'No network connection'
      const error = new Error(message)
      const expected = { error }

      window.fetch.mockImplementationOnce(() => Promise.reject(new Error(message)))
      return Api.post('endpoint', 'data').then(actual => expect(actual).toEqual(expected))
    })
  })
})
