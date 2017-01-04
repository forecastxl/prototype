import Token from './token'

describe('Token service', () => {
  beforeEach(() => {
    window.sessionStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn()
    }
  })

  describe('set', () => {
    it('should set a token', () => {
      Token.set('value')
      expect(window.sessionStorage.setItem).toHaveBeenCalledWith('token', 'value')
    })
  })

  describe('get', () => {
    it('should return a token', () => {
      window.sessionStorage.getItem.mockImplementationOnce(() => 'value')

      const actual = Token.get()
      expect(actual).toEqual('value')
    })
  })

  describe('exists', () => {
    it('should return a boolean that indicates whether a token exists', () => {
      window.sessionStorage.getItem.mockImplementationOnce(() => 'value')

      const actual = Token.exists()
      expect(actual).toEqual(true)
    })
  })

  describe('destroy', () => {
    it('should destroy the token', () => {
      Token.destroy()
      expect(window.sessionStorage.removeItem).toHaveBeenCalledWith('token')
    })
  })
})
