import transformErrorArraysToString from './transformErrorArraysToString'

describe('transformErrorArraysToString', () => {
  it('should join array values to a string', () => {
    const data = { errors: { base: ['multiple', 'values'] } }
    const expected = { errors: { base: 'multiple. values' } }
    const actual = transformErrorArraysToString(data)

    expect(actual).toEqual(expected)
  })

  it('should be able to process arrays with a single value', () => {
    const data = { errors: { base: ['single value'] } }
    const expected = { errors: { base: 'single value' } }
    const actual = transformErrorArraysToString(data)

    expect(actual).toEqual(expected)
  })

  it('should ignore values that are not arrays', () => {
    const data = { errors: { base: 'single value' } }
    const expected = { errors: { base: 'single value' } }
    const actual = transformErrorArraysToString(data)

    expect(actual).toEqual(expected)
  })

  it('should return the data unmodified if errors are missing', () => {
    const data = { notErrors: {} }
    const expected = { notErrors: {} }
    const actual = transformErrorArraysToString(data)

    expect(actual).toEqual(expected)
  })
})
