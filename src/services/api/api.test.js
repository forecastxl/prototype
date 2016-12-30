import 'isomorphic-fetch'
import { getJson, postJson } from './api'

describe('api service', () => {
  describe('getJson', () => {
    beforeEach(() => {
      window.fetch = jest.fn()
    })

    it('should return the destringified response if it is ok', () => {
      const response = { data: ['data'] }
      const body = JSON.stringify(response)
      const init = { status: 200, statusText: 'OK' }
      const expected = { response }

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return getJson('endpoint').then(actual => expect(actual).toEqual(expected))
    })

    it('should return an error if the response is not ok', () => {
      const body = JSON.stringify({})
      const init = { status: 401, statusText: 'Unauthorized' }
      const error = new Error(init.statusText)
      const expected = { error }

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return getJson('endpoint').then(actual => expect(actual).toEqual(expected))
    })

    it('should return an error on network errors', () => {
      const message = 'No network connection'
      const error = new Error(message)
      const expected = { error }

      window.fetch.mockImplementationOnce(() => Promise.reject(new Error(message)))
      return getJson('endpoint').then(actual => expect(actual).toEqual(expected))
    })
  })

  describe('postJson', () => {
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
      return postJson('endpoint', data).then(({ response }) => expect(response).toEqual(expected))
    })

    it('should return the destringified response if it is ok', () => {
      const response = { data: ['data'] }
      const body = JSON.stringify(response)
      const init = { status: 200, statusText: 'OK' }
      const expected = { response }

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return postJson('endpoint', 'data').then(actual => expect(actual).toEqual(expected))
    })

    it('should return an error if the response is not ok', () => {
      const body = JSON.stringify({})
      const init = { status: 401, statusText: 'Unauthorized' }
      const error = new Error(init.statusText)
      const expected = { error }

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return postJson('endpoint', 'data').then(actual => expect(actual).toEqual(expected))
    })

    it('should return an error on network errors', () => {
      const message = 'No network connection'
      const error = new Error(message)
      const expected = { error }

      window.fetch.mockImplementationOnce(() => Promise.reject(new Error(message)))
      return postJson('endpoint', 'data').then(actual => expect(actual).toEqual(expected))
    })
  })
})
