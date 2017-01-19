import 'isomorphic-fetch'
import Api from './api'
import decamelize from '../decamelize'

describe('api service', () => {
  describe('get', () => {
    beforeEach(() => {
      window.fetch = jest.fn()
    })

    it('should include a token when passed', () => {
      // save references for unmocking
      const originalFetch = Api.fetch
      const originalHeaders = window.Headers

      // mock headers and local fetch
      Api.fetch = jest.fn()
      const spy = jest.fn()
      window.Headers = function Headers() {
        this.append = spy
      }

      Api.get('endpoint', 'token')
      expect(spy).toHaveBeenCalledWith('Authorization', 'Bearer token')

      // restore mocks to originals
      window.Headers = originalHeaders
      Api.fetch = originalFetch
    })

    it('should return the destringified response if it is ok', () => {
      const data = { key: 'value' }
      const body = JSON.stringify(data)
      const init = { status: 200, statusText: 'OK' }
      const expected = { data }

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

    it('should include a token when passed', () => {
      // save references for unmocking
      const originalFetch = Api.fetch
      const originalHeaders = window.Headers

      // mock headers and local fetch
      Api.fetch = jest.fn()
      const spy = jest.fn()
      window.Headers = function Headers() {
        this.append = spy
      }

      Api.post('endpoint', {}, 'token')
      expect(spy).toHaveBeenCalledWith('Authorization', 'Bearer token')

      // restore mocks to originals
      window.Headers = originalHeaders
      Api.fetch = originalFetch
    })

    it('should post stringified data', () => {
      const init = { status: 200, statusText: 'OK' }
      const data = { key: 'value' }
      const expected = JSON.stringify(data)

      window.fetch.mockImplementationOnce(
        request => Promise.resolve(new Response(JSON.stringify(request.body), init))
      )
      return Api.post('endpoint', data).then(({ data }) => expect(data).toEqual(expected))
    })

    it('should decamelize data', () => {
      const init = { status: 200, statusText: 'OK' }
      const data = { camelCase: 'value' }
      const expected = JSON.stringify(decamelize(data))

      window.fetch.mockImplementationOnce(
        request => Promise.resolve(new Response(JSON.stringify(request.body), init))
      )
      return Api.post('endpoint', data).then(({ data }) => expect(data).toEqual(expected))
    })

    it('should return the destringified response if it is ok', () => {
      const data = { key: 'value' }
      const body = JSON.stringify(data)
      const init = { status: 200, statusText: 'OK' }
      const expected = { data }

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return Api.post('endpoint', {}).then(actual => expect(actual).toEqual(expected))
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
