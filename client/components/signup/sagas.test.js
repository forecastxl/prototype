import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import * as sagas from './sagas'
import * as actions from './actions'
import * as types from './actionTypes'

describe('sagas', () => {
  describe('watchRequestAccount', () => {
    it('should respond to REQUEST_ACCOUNT', () => {
      const generator = sagas.watchRequestAccount()
      const actual = generator.next().value
      const expected = call(takeLatest, types.REQUEST_ACCOUNT, sagas.requestAccount)

      expect(actual).toEqual(expected)
    })
  })

  describe('requestAccount', () => {
    const action = { payload: 'payload' }

    it('should post the account data', () => {
      const generator = sagas.requestAccount(action)
      const actual = generator.next().value
      const expected = call(post, endpoints.SIGNUP_ENDPOINT, action.payload)

      expect(actual).toEqual(expected)
    })

    it('should put requestAccountSuccess on success', () => {
      const data = 'data'
      const generator = sagas.requestAccount(action)
      const expected = put(actions.requestAccountSuccess(data))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to signup/success after a succesful request', () => {
      const data = 'data'
      const generator = sagas.requestAccount(action)
      const expected = put(push('/signup/success'))

      generator.next()
      generator.next({ data })
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put requestAccountFail on errors', () => {
      const error = 'error'
      const generator = sagas.requestAccount(action)
      const expected = put(actions.requestAccountFail(error))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })
})
