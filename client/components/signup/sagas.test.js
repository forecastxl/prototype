import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import { actions as fetchActions } from '../../data/fetch'
import { actions as sessionActions } from '../../data/session'
import * as sagas from './sagas'
import * as actions from './actions'
import * as types from './actionTypes'

describe('sagas', () => {
  describe('createAccount', () => {
    const action = { account: 'account' }

    it('should post the account data', () => {
      const generator = sagas.createAccount(action)
      const actual = generator.next().value
      const expected = call(post, endpoints.CREATE_ACCOUNT, action.account)

      expect(actual).toEqual(expected)
    })

    it('should put createSession on success', () => {
      const data = { token: 'token' }
      const generator = sagas.createAccount(action)
      const expected = put(sessionActions.createSession(data.token))

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

    it('should put createSession on success', () => {
      const data = { token: 'token' }
      const generator = sagas.confirmAccount(action)
      const expected = put(sessionActions.createSession(data.token))

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
})
