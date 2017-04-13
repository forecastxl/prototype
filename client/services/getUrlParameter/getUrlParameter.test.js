import getUrlParameter from './getUrlParameter'

describe('getUrlParameter', () => {
  it('should retrieve the specified parameter from an url with a single parameter', () => {
    Object.defineProperty(window.location, 'search', {
      writable: true,
      value: '?key=value'
    })

    const actual = getUrlParameter('key')
    const expected = 'value'

    expect(actual).toEqual(expected)
  })

  it('should retrieve the specified parameter from an url with multiple parameters', () => {
    Object.defineProperty(window.location, 'search', {
      writable: true,
      value: '?key=value&anotherKey=anotherValue'
    })

    const actual = getUrlParameter('key')
    const expected = 'value'

    expect(actual).toEqual(expected)
  })

  it('should return false when nothing can be found', () => {
    Object.defineProperty(window.location, 'search', {
      writable: true,
      value: '?key=value&anotherKey=anotherValue'
    })

    const actual = getUrlParameter('doesNotExist')
    const expected = false

    expect(actual).toEqual(expected)
  })
})
