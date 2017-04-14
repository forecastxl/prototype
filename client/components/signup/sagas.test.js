import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import Notifications from 'react-notification-system-redux'
import endpoints from '../../services/endpoints'
import api from '../../services/api'
import { actions as sessionActions } from '../../data/session'
import * as sagas from './sagas'
import * as actions from './actions'
import * as types from './actionTypes'

describe('sagas', () => {
  describe('watchCreateAccount', () => {
    it('should respond to CREATE_ACCOUNT', () => {
      const generator = sagas.watchCreateAccount()
      const actual = generator.next().value
      const expected = call(takeLatest, types.CREATE_ACCOUNT, sagas.createAccount)

      expect(actual).toEqual(expected)
    })
  })

  describe('createAccount', () => {
    const action = { payload: 'account' }
    const endpoint = endpoints.constant.CREATE_ACCOUNT
    const data = { account: action.payload }

    it('should post the account data', () => {
      const generator = sagas.createAccount(action)
      const actual = generator.next().value
      const expected = call(api.post, { endpoint, data })

      expect(actual).toEqual(expected)
    })

    it('should call Notifications.success on success', () => {
      const response = { data: 'data' }
      const generator = sagas.createAccount(action)
      const expected = call(Notifications.success, { title: 'title', message: 'message' })

      generator.next()
      const actual = generator.next(response).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to home after a succesful request', () => {
      const response = { data: 'data' }
      const generator = sagas.createAccount(action)
      const expected = put(push('/'))

      generator.next()
      generator.next(response)
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put createAccountFailure on errors', () => {
      const error = new Error('error')
      const generator = sagas.createAccount(action)
      const expected = put(actions.createAccountFailure(error))

      generator.next()
      const actual = generator.throw(error).value

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
    const endpoint = endpoints.constant.CONFIRM_ACCOUNT
    const data = { token: action.payload }

    it('should post the account data', () => {
      const generator = sagas.confirmAccount(action)
      const actual = generator.next().value
      const expected = call(api.post, { endpoint, data })

      expect(actual).toEqual(expected)
    })

    it('should put loginSubmit on success', () => {
      const response = { token: 'token' }
      const generator = sagas.confirmAccount(action)
      const expected = put(sessionActions.loginSubmit(response.token))

      generator.next()
      const actual = generator.next(response).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to home after a succesful request', () => {
      const response = { token: 'token' }
      const generator = sagas.confirmAccount(action)
      const expected = put(push('/'))

      generator.next()
      generator.next(response)
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put confirmAccountFailure on errors', () => {
      const error = new Error('error')
      const generator = sagas.confirmAccount(action)
      const expected = put(actions.confirmAccountFailure(error))

      generator.next()
      const actual = generator.throw(error).value

      expect(actual).toEqual(expected)
    })
  })
})
