import decamelize from './decamelize'

describe('decamelize', () => {
  it('should convert all upper level keys to snakecase', () => {
    const camelized = { camelCase: 'value', oneMore: 'value' }
    const expected = { camel_case: 'value', one_more: 'value' }
    const actual = decamelize(camelized)

    expect(actual).toEqual(expected)
  })
})
