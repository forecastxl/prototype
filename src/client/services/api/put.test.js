import 'isomorphic-fetch'
import fetchy from '../fetchy'
import put from './put'

jest.mock('../fetchy', () => jest.fn())

describe('put', () => {
  it('calls fetchy with the right endpoint', () => {
    put({ endpoint: 'endpoint', data: { some: 'data' } })
    const lastCall = fetchy.mock.calls.length - 1
    const expected = 'endpoint'

    expect(fetchy.mock.calls[lastCall][0]).toEqual(expected)
  })

  it('calls fetchy with the right init object', () => {
    const data = { some: 'data' }
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const init = { method: 'PUT', headers, body: JSON.stringify(data) }

    put({ endpoint: 'endpoint', data })
    const lastCall = fetchy.mock.calls.length - 1

    expect(fetchy.mock.calls[lastCall][1]).toEqual(init)
  })

  it('includes a token', () => {
    const data = { some: 'data' }
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer token'
    })
    const init = { method: 'PUT', headers, body: JSON.stringify(data) }

    put({ endpoint: 'endpoint', data, token: 'token' })
    const lastCall = fetchy.mock.calls.length - 1

    expect(fetchy.mock.calls[lastCall][1]).toEqual(init)
  })
})
