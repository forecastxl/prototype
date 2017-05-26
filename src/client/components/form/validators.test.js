import * as validators from './validators'

describe('validators', () => {
  describe('required', () => {
    it('should return an error message when given an empty input', () => {
      expect(validators.required('')).toBe('Dit veld is verplicht')
    })
    it('should return undefined when given an empty input', () => {
      expect(validators.required('some input')).toBeUndefined()
    })
  })
})
