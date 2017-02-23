import 'isomorphic-fetch'
import put from './put'
import fetch from '../fetch'
import decamelize from '../decamelize'

jest.mock('../fetch', () => jest.fn())
jest.mock('../decamelize', () => jest.fn())

describe('put', () => {
  it('throws an error if data is not an object', () => {
    expect(() => { put('endpoint', 'string') }).toThrowError('The data argument must be an object')
  })

  it('calls fetch with the right endpoint', () => {
    put('endpoint')
    const lastCall = fetch.mock.calls.length - 1
    const expected = 'endpoint'

    expect(fetch.mock.calls[lastCall][0]).toEqual(expected)
  })

  it('calls fetch with the right method', () => {
    put('endpoint')
    const lastCall = fetch.mock.calls.length - 1
    const expected = 'PUT'

    expect(fetch.mock.calls[lastCall][2].method).toEqual(expected)
  })

  it('passes stringified data to fetch', () => {
    decamelize.mockImplementationOnce(input => input)
    put('endpoint', { data: 'data' })
    const lastCall = fetch.mock.calls.length - 1
    const expected = JSON.stringify({ data: 'data' })

    expect(fetch.mock.calls[lastCall][2].body).toEqual(expected)
  })

  it('decamelizes data', () => {
    put('endpoint', { data: 'data' })
    const lastCall = decamelize.mock.calls.length - 1
    const expected = { data: 'data' }

    expect(decamelize.mock.calls[lastCall][0]).toEqual(expected)
  })

  it('sets the correct headers', () => {
    put('endpoint')
    const lastCall = fetch.mock.calls.length - 1
    const expected = { 'Content-Type': 'application/json' }

    expect(fetch.mock.calls[lastCall][1]).toEqual(expected)
  })

  it('includes a token when passed', () => {
    put('endpoint', {}, 'token')
    const lastCall = fetch.mock.calls.length - 1
    const expected = 'Bearer token'

    expect(fetch.mock.calls[lastCall][1].Authorization).toEqual(expected)
  })
})

