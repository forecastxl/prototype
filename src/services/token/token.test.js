import Token from './token'

describe('Token service', () => {
  beforeEach(() => {
    window.sessionStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn()
    }
  })

  describe('setToken', () => {
    it('should set a token', () => {
      Token.setToken('value')
      expect(window.sessionStorage.setItem).toHaveBeenCalledWith('token', 'value')
    })
  })

  describe('getToken', () => {
    it('should return a token', () => {
      window.sessionStorage.getItem.mockImplementationOnce(() => 'value')

      const actual = Token.getToken()
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

  describe('destroyToken', () => {
    it('should destroy the token', () => {
      Token.destroyToken()
      expect(window.sessionStorage.removeItem).toHaveBeenCalledWith('token')
    })
  })
})
