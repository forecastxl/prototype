import transformToSnakeCase from './transformToSnakeCase'

describe('transformToSnakeCase', () => {
  it('should convert all keys to snakecase', () => {
    const camelized = { camelCase: 'value', nested: { nestedValue: 'value' } }
    const expected = { camel_case: 'value', nested: { nested_value: 'value' } }
    const actual = transformToSnakeCase(camelized)

    expect(actual).toEqual(expected)
  })

  it('should be able to process an empty object', () => {
    expect(transformToSnakeCase({})).toEqual({})
  })

  it('should throw a descriptive error when there is no parameter', () => {
    expect(() => transformToSnakeCase()).toThrowErrorMatchingSnapshot()
  })
})
