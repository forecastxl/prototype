import 'isomorphic-fetch'
import post from './post'
import fetchy from '../fetchy'

jest.mock('../fetchy', () => jest.fn())

describe('post', () => {
  it('calls fetchy with the right endpoint', () => {
    post({ endpoint: 'endpoint', data: { some: 'data' } })
    const lastCall = fetchy.mock.calls.length - 1
    const expected = 'endpoint'

    expect(fetchy.mock.calls[lastCall][0]).toEqual(expected)
  })

  it('calls fetchy with the right init object', () => {
    const data = { some: 'data' }
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const init = { method: 'POST', headers, body: JSON.stringify(data) }

    post({ endpoint: 'endpoint', data })
    const lastCall = fetchy.mock.calls.length - 1

    expect(fetchy.mock.calls[lastCall][1]).toEqual(init)
  })

  it('includes a token', () => {
    const data = { some: 'data' }
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer token'
    })
    const init = { method: 'POST', headers, body: JSON.stringify(data) }

    post({ endpoint: 'endpoint', data, token: 'token' })
    const lastCall = fetchy.mock.calls.length - 1

    expect(fetchy.mock.calls[lastCall][1]).toEqual(init)
  })
})
