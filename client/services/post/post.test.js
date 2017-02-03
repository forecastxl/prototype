import 'isomorphic-fetch'
import post from './post'
import fetch from '../fetch'
import decamelize from '../decamelize'

jest.mock('../fetch', () => jest.fn())
jest.mock('../decamelize', () => jest.fn())

describe('post', () => {
  it('throws an error if data is not an object', () => {
    expect(() => { post('endpoint', 'string') }).toThrowError('The data argument must be an object')
  })

  it('calls fetch with the right endpoint', () => {
    post('endpoint')
    const lastCall = fetch.mock.calls.length - 1
    const expected = 'endpoint'

    expect(fetch.mock.calls[lastCall][0]).toEqual(expected)
  })

  it('calls fetch with the right method', () => {
    post('endpoint')
    const lastCall = fetch.mock.calls.length - 1
    const expected = 'POST'

    expect(fetch.mock.calls[lastCall][2].method).toEqual(expected)
  })

  it('passes stringified data to fetch', () => {
    decamelize.mockImplementationOnce(input => input)
    post('endpoint', { data: 'data' })
    const lastCall = fetch.mock.calls.length - 1
    const expected = JSON.stringify({ data: 'data' })

    expect(fetch.mock.calls[lastCall][2].body).toEqual(expected)
  })

  it('decamelizes data', () => {
    post('endpoint', { data: 'data' })
    const lastCall = decamelize.mock.calls.length - 1
    const expected = { data: 'data' }

    expect(decamelize.mock.calls[lastCall][0]).toEqual(expected)
  })

  it('sets the correct headers', () => {
    post('endpoint')
    const lastCall = fetch.mock.calls.length - 1
    const expected = { 'Content-Type': 'application/json' }

    expect(fetch.mock.calls[lastCall][1]).toEqual(expected)
  })

  it('includes a token when passed', () => {
    post('endpoint', {}, 'token')
    const lastCall = fetch.mock.calls.length - 1
    const expected = 'Bearer token'

    expect(fetch.mock.calls[lastCall][1].Authorization).toEqual(expected)
  })
})

