import transformRequestData from './transformRequestData'

describe('transformRequestData', () => {
  it('should convert a request properly', () => {
    const request = { camelCase: 'camelCase' }
    const expected = { camel_case: 'camelCase' }

    expect(transformRequestData(request)).toEqual(expected)
  })
})
