import ClientError from './ClientError'

describe('ClientError', () => {
  it('should return a valid error', () => {
    const actual = new ClientError()

    expect(actual).toBeInstanceOf(Error)
  })

  it('should accept a message', () => {
    const message = 'message'
    const actual = new ClientError(message)

    expect(actual.message).toBe(message)
  })

  it('should fall back to a default message', () => {
    const actual = new ClientError()

    expect(actual.message).toMatchSnapshot()
  })
})
