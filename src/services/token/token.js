export default class Token {
  static setToken(token) {
    sessionStorage.setItem('token', token)
  }

  static getToken() {
    return sessionStorage.getItem('token')
  }

  static hasToken() {
    return sessionStorage.getItem('token') !== null
  }

  static destroyToken() {
    sessionStorage.removeItem('token', null)
  }
}
