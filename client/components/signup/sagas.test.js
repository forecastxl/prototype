import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import { actions as sessionActions } from '../../data/session'
import { actions as notificationActions } from '../notifications'
import * as sagas from './sagas'
import * as actions from './actions'
import * as types from './actionTypes'

describe('sagas', () => {
  describe('createAccount', () => {
    const action = { payload: 'account' }

    it('should post the account data', () => {
      const generator = sagas.createAccount(action)
      const actual = generator.next().value
      const expected = call(post, endpoints.CREATE_ACCOUNT, { account: action.payload })

      expect(actual).toEqual(expected)
    })

    it('should add a notification on success', () => {
      const data = { data: 'data' }
      const message = 'Account aangemaakt. Bevestig via de email.'
      const generator = sagas.createAccount(action)
      const expected = put(notificationActions.addNotification(message))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to home after a succesful request', () => {
      const data = { data: 'data' }
      const generator = sagas.createAccount(action)
      const expected = put(push('/'))

      generator.next()
      generator.next({ data })
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put createAccountFailure on api errors', () => {
      const error = { errors: 'errors' }
      const generator = sagas.createAccount(action)
      const expected = put(actions.createAccountFailure(error.errors))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })

    it('should put createAccountFailure on network errors', () => {
      const error = new Error('error')
      const generator = sagas.createAccount(action)
      const expected = put(actions.createAccountFailure(error))

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
    const action = { payload: 'token' }

    it('should post the account data', () => {
      const generator = sagas.confirmAccount(action)
      const actual = generator.next().value
      const expected = call(post, endpoints.CONFIRM_ACCOUNT, { token: action.payload })

      expect(actual).toEqual(expected)
    })

    it('should put loginSubmit on success', () => {
      const data = { token: 'token' }
      const generator = sagas.confirmAccount(action)
      const expected = put(sessionActions.loginSubmit(data.token))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to home after a succesful request', () => {
      const data = { token: 'token' }
      const generator = sagas.confirmAccount(action)
      const expected = put(push('/'))

      generator.next()
      generator.next({ data })
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put confirmAccountFailure on api errors', () => {
      const error = { errors: 'errors' }
      const generator = sagas.confirmAccount(action)
      const expected = put(actions.confirmAccountFailure(error.errors))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })

    it('should put confirmAccountFailure on network errors', () => {
      const error = new Error('error')
      const generator = sagas.confirmAccount(action)
      const expected = put(actions.confirmAccountFailure(error))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })
})
