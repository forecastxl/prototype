import transformResponseData from './transformResponseData'

describe('transformResponseData', () => {
  it('should convert a response properly', () => {
    const response = { base: 'base', snake_case: 'snake_case' }
    const expected = { _error: 'base', snakeCase: 'snake_case' }

    return transformResponseData(response).then(actual => expect(actual).toEqual(expected))
  })
})
