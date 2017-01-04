export default class Token {
  static set(token) {
    sessionStorage.setItem('token', token)
  }

  static get() {
    return sessionStorage.getItem('token')
  }

  static exists() {
    return sessionStorage.getItem('token') !== null
  }

  static destroy() {
    sessionStorage.removeItem('token')
  }
}
