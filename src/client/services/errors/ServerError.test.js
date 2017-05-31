import ServerError from './ServerError'

describe('ServerError', () => {
  it('should return a valid error', () => {
    const actual = new ServerError()

    expect(actual).toBeInstanceOf(Error)
  })

  it('should accept a message', () => {
    const message = 'message'
    const actual = new ServerError(message)

    expect(actual.message).toBe(message)
  })

  it('should fall back to a default message', () => {
    const actual = new ServerError()

    expect(actual.message).toMatchSnapshot()
  })
})
