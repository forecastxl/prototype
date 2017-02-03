import camelize from './camelize'

describe('camelize', () => {
  it('should convert all keys to camelcase', () => {
    const snakecased = { snake_case: 'value', nested: { nested_value: 'value' } }
    const expected = { snakeCase: 'value', nested: { nestedValue: 'value' } }
    const actual = camelize(snakecased)

    expect(actual).toEqual(expected)
  })
})
