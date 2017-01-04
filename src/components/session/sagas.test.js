import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import Api, { endpoints } from '../../services/api'
import * as sagas from './sagas'
import * as actions from './actions'
import * as types from './actionTypes'

describe('sagas', () => {
  describe('watchLoginUser', () => {
    it('should respond to LOGIN_USER', () => {
      const generator = sagas.watchLoginUser()
      const actual = generator.next().value
      const expected = call(takeLatest, types.LOGIN_USER, sagas.loginUser)

      expect(actual).toEqual(expected)
    })
  })

  describe('loginUser', () => {
    const action = { payload: 'payload' }

    it('should post the login data', () => {
      const generator = sagas.loginUser(action)
      const actual = generator.next().value
      const expected = call(Api.post, endpoints.LOGIN_ENDPOINT, action.payload)

      expect(actual).toEqual(expected)
    })

    it('should put loginUserSuccess on success', () => {
      const response = 'response'
      const generator = sagas.loginUser(action)
      const expected = put(actions.loginUserSuccess(response))

      generator.next()
      const actual = generator.next({ response }).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to home after a succesful login', () => {
      const response = 'response'
      const generator = sagas.loginUser(action)
      const expected = put(push('/home'))

      generator.next()
      generator.next({ response })
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put loginUserFail on errors', () => {
      const error = 'error'
      const generator = sagas.loginUser(action)
      const expected = put(actions.loginUserFail(error))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })
})
