import decamelize from './decamelize'

describe('decamelize', () => {
  it('should convert all upper level keys to snakecase', () => {
    const camelized = { camelCase: 'value', nested: { nestedValue: 'value' } }
    const expected = { camel_case: 'value', nested: { nested_value: 'value' } }
    const actual = decamelize(camelized)

    expect(actual).toEqual(expected)
  })
})
