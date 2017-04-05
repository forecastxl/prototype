import transformForReduxForms from './transformForReduxForms'

describe('transformForReduxForms', () => {
  it('should convert base to _error', () => {
    const data = { base: 'base' }
    const expected = { _error: 'base' }
    const actual = transformForReduxForms(data)

    expect(actual).toEqual(expected)
  })

  it('should leave other keys intact', () => {
    const data = { other: 'other' }

    expect(transformForReduxForms(data)).toEqual(data)
  })
})
