import 'isomorphic-fetch'
import fetchy from './fetchy'
import handleResponse from './handleResponse'

window.fetch = jest.fn()
jest.mock('./handleResponse', () => jest.fn())

describe('fetchy', () => {
  it('should pass all arguments to fetch', () => {
    window.fetch.mockImplementationOnce(() => Promise.resolve('response'))
    handleResponse.mockImplementationOnce(response => Promise.resolve(response))

    return fetchy('endpoint', 'init').then(() =>
      expect(window.fetch).toHaveBeenCalledWith('endpoint', 'init')
    )
  })

  it('should call handleResponse on successful fetches', () => {
    window.fetch.mockImplementationOnce(() => Promise.resolve('Another response'))

    return fetchy('endpoint', 'init').then(() =>
      expect(handleResponse).toHaveBeenCalledWith('Another response')
    )
  })
})
