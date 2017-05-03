import transformForReduxForms from './transformForReduxForms'

describe('transformForReduxForms', () => {
  it('should convert base to _error', () => {
    const data = { errors: { base: 'base' } }
    const expected = { errors: { _error: 'base' } }
    const actual = transformForReduxForms(data)

    expect(actual).toEqual(expected)
  })

  it('should leave other keys intact', () => {
    const data = { errors: { other: 'other' } }

    expect(transformForReduxForms(data)).toEqual(data)
  })
})
