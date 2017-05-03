import transformResponseData from './transformResponseData'

describe('transformResponseData', () => {
  it('should convert a response properly', () => {
    const response = {
      errors: { base: ['base'], snake_case: ['snake_case'], multiple: ['multiple', 'values'] }
    }
    const expected = {
      errors: { _error: 'base', snakeCase: 'snake_case', multiple: 'multiple. values' }
    }

    return transformResponseData(response).then(actual => expect(actual).toEqual(expected))
  })
})
