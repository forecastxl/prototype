import transformToCamelCase from './transformToCamelCase'

describe('transformToCamelCase', () => {
  it('should convert all keys to camelcase', () => {
    const snakecased = { snake_case: 'value', nested: { nested_value: 'value' } }
    const expected = { snakeCase: 'value', nested: { nestedValue: 'value' } }
    const actual = transformToCamelCase(snakecased)

    expect(actual).toEqual(expected)
  })

  it('should be able to process an empty object', () => {
    expect(transformToCamelCase({})).toEqual({})
  })

  it('should throw a descriptive error when there is no parameter', () => {
    expect(() => transformToCamelCase()).toThrowErrorMatchingSnapshot()
  })
})
