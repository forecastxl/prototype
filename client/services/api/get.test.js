import 'isomorphic-fetch'
import get from './get'
import fetchy from '../fetchy'

jest.mock('../fetchy', () => jest.fn())

describe('get', () => {
  it('calls fetchy with the right endpoint', () => {
    get({ endpoint: 'endpoint' })
    const lastCall = fetchy.mock.calls.length - 1
    const expected = 'endpoint'

    expect(fetchy.mock.calls[lastCall][0]).toEqual(expected)
  })

  it('calls fetchy with the right init object', () => {
    get({ endpoint: 'endpoint' })
    const lastCall = fetchy.mock.calls.length - 1
    const expected = { method: 'GET', headers: new Headers({}) }

    expect(fetchy.mock.calls[lastCall][1]).toEqual(expected)
  })

  it('includes a token', () => {
    const headers = new Headers({ Authorization: 'Bearer token' })
    const init = { method: 'GET', headers }

    get({ endpoint: 'endpoint', token: 'token' })
    const lastCall = fetchy.mock.calls.length - 1

    expect(fetchy.mock.calls[lastCall][1]).toEqual(init)
  })
})
