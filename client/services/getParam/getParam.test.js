import getParam from './getParam'

describe('getParam', () => {
  it('should retrieve the specified param from an url with a single param', () => {
    Object.defineProperty(window.location, 'search', {
      writable: true,
      value: '?key=value'
    })

    const actual = getParam('key')
    const expected = 'value'

    expect(actual).toEqual(expected)
  })

  it('should retrieve the specified param from an url with multiple params', () => {
    Object.defineProperty(window.location, 'search', {
      writable: true,
      value: '?key=value&anotherKey=anotherValue'
    })

    const actual = getParam('key')
    const expected = 'value'

    expect(actual).toEqual(expected)
  })

  it('should return false when nothing can be found', () => {
    Object.defineProperty(window.location, 'search', {
      writable: true,
      value: '?key=value&anotherKey=anotherValue'
    })

    const actual = getParam('doesNotExist')
    const expected = false

    expect(actual).toEqual(expected)
  })
})
