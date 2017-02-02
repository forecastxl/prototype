import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import { actions as fetchActions } from '../../data/fetch'
import * as sagas from './sagas'
import * as actions from './actions'
import * as types from './actionTypes'

describe('sagas', () => {
  describe('watchLogin', () => {
    it('should respond to LOGIN', () => {
      const generator = sagas.watchLogin()
      const actual = generator.next().value
      const expected = call(takeLatest, types.LOGIN, sagas.login)

      expect(actual).toEqual(expected)
    })
  })

  describe('login', () => {
    const action = { user: 'user' }

    it('should post the login data', () => {
      const generator = sagas.login(action)
      const actual = generator.next().value
      const expected = call(post, endpoints.LOGIN, action)

      expect(actual).toEqual(expected)
    })

    it('should put loginSuccess on success', () => {
      const data = { token: 'token' }
      const generator = sagas.login(action)
      const expected = put(actions.loginSuccess(data.token))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to root after a succesful request', () => {
      const data = { token: 'token' }
      const generator = sagas.login(action)
      const expected = put(push('/'))

      generator.next()
      generator.next({ data })
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put loginFail on api errors', () => {
      const error = { errors: 'errors' }
      const generator = sagas.login(action)
      const expected = put(actions.loginFail(error.errors))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchFail on network errors', () => {
      const error = 'error'
      const generator = sagas.login(action)
      const expected = put(fetchActions.fetchFail(error.message))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })

  describe('watchCreateAccount', () => {
    it('should respond to CREATE_ACCOUNT', () => {
      const generator = sagas.watchCreateAccount()
      const actual = generator.next().value
      const expected = call(takeLatest, types.CREATE_ACCOUNT, sagas.createAccount)

      expect(actual).toEqual(expected)
    })
  })

  describe('createAccount', () => {
    const action = { account: 'account' }

    it('should post the account data', () => {
      const generator = sagas.createAccount(action)
      const actual = generator.next().value
      const expected = call(post, endpoints.CREATE_ACCOUNT, action)

      expect(actual).toEqual(expected)
    })

    it('should put createAccountSuccess on success', () => {
      const data = { token: 'token' }
      const generator = sagas.createAccount(action)
      const expected = put(actions.createAccountSuccess(data.token))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to signup/success after a succesful request', () => {
      const data = { token: 'token' }
      const generator = sagas.createAccount(action)
      const expected = put(push('/signup/success'))

      generator.next()
      generator.next({ data })
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put requestAccountFail on api errors', () => {
      const error = { errors: 'errors' }
      const generator = sagas.createAccount(action)
      const expected = put(actions.createAccountFail(error.errors))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchFail on network errors', () => {
      const error = 'error'
      const generator = sagas.createAccount(action)
      const expected = put(fetchActions.fetchFail(error.message))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })

  describe('watchConfirmAccount', () => {
    it('should respond to CONFIRM_ACCOUNT', () => {
      const generator = sagas.watchConfirmAccount()
      const actual = generator.next().value
      const expected = call(takeLatest, types.CONFIRM_ACCOUNT, sagas.confirmAccount)

      expect(actual).toEqual(expected)
    })
  })

  describe('confirmAccount', () => {
    const action = { token: 'token' }

    it('should post the account data', () => {
      const generator = sagas.confirmAccount(action)
      const actual = generator.next().value
      const expected = call(post, endpoints.CONFIRM_ACCOUNT, action)

      expect(actual).toEqual(expected)
    })

    it('should put confirmAccountSuccess on success', () => {
      const data = { token: 'token' }
      const generator = sagas.confirmAccount(action)
      const expected = put(actions.confirmAccountSuccess(data.token))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to root after a succesful request', () => {
      const data = { token: 'token' }
      const generator = sagas.confirmAccount(action)
      const expected = put(push('/'))

      generator.next()
      generator.next({ data })
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put confirmAccountFail on api errors', () => {
      const error = { errors: 'errors' }
      const generator = sagas.confirmAccount(action)
      const expected = put(actions.confirmAccountFail(error.errors))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchFail on network errors', () => {
      const error = 'error'
      const generator = sagas.confirmAccount(action)
      const expected = put(fetchActions.fetchFail(error.message))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })

  describe('watchResetPassword', () => {
    it('should respond to RESET_PASSWORD', () => {
      const generator = sagas.watchResetPassword()
      const actual = generator.next().value
      const expected = call(takeLatest, types.RESET_PASSWORD, sagas.resetPassword)

      expect(actual).toEqual(expected)
    })
  })

  describe('resetPassword', () => {
    const action = {
      token: 'token',
      password: 'password',
      passwordConfirmation: 'password'
    }

    it('should post the data', () => {
      const generator = sagas.resetPassword(action)
      const actual = generator.next().value
      const expected = call(post, endpoints.RESET_PASSWORD, action)

      expect(actual).toEqual(expected)
    })

    it('should put resetPasswordSuccess on success', () => {
      const data = { token: 'token' }
      const generator = sagas.resetPassword(action)
      const expected = put(actions.resetPasswordSuccess(data.token))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to root after a succesful request', () => {
      const data = { token: 'token' }
      const generator = sagas.resetPassword(action)
      const expected = put(push('/'))

      generator.next()
      generator.next({ data })
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put resetPasswordFail on api errors', () => {
      const error = { errors: 'errors' }
      const generator = sagas.resetPassword(action)
      const expected = put(actions.resetPasswordFail(error.errors))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchFail on network errors', () => {
      const error = 'error'
      const generator = sagas.resetPassword(action)
      const expected = put(fetchActions.fetchFail(error.message))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })

  describe('watchRequestResetPassword', () => {
    it('should respond to REQUEST_RESET_PASSWORD', () => {
      const generator = sagas.watchRequestResetPassword()
      const actual = generator.next().value
      const expected = call(takeLatest, types.REQUEST_RESET_PASSWORD, sagas.requestResetPassword)

      expect(actual).toEqual(expected)
    })
  })

  describe('requestResetPassword', () => {
    const action = {
      email: 'email'
    }

    it('should post the data', () => {
      const generator = sagas.requestResetPassword(action)
      const actual = generator.next().value
      const expected = call(post, endpoints.REQUEST_RESET_PASSWORD, action)

      expect(actual).toEqual(expected)
    })

    it('should put requestResetPasswordSuccess on success', () => {
      const data = { token: 'token' }
      const generator = sagas.requestResetPassword(action)
      const expected = put(actions.requestResetPasswordSuccess(data.token))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to root after a succesful request', () => {
      const data = { token: 'token' }
      const generator = sagas.requestResetPassword(action)
      const expected = put(push('/'))

      generator.next()
      generator.next({ data })
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put requestResetPasswordFail on api errors', () => {
      const error = { errors: 'errors' }
      const generator = sagas.requestResetPassword(action)
      const expected = put(actions.requestResetPasswordFail(error.errors))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchFail on network errors', () => {
      const error = 'error'
      const generator = sagas.requestResetPassword(action)
      const expected = put(fetchActions.fetchFail(error.message))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })
})
