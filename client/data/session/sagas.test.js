import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import * as sagas from './sagas'
import * as actions from './actions'
import * as types from './actionTypes'

describe('sagas', () => {
  describe('watchRequestToken', () => {
    it('should respond to REQUEST_TOKEN', () => {
      const generator = sagas.watchRequestToken()
      const actual = generator.next().value
      const expected = call(takeLatest, types.REQUEST_TOKEN, sagas.requestToken)

      expect(actual).toEqual(expected)
    })
  })

  describe('requestToken', () => {
    const action = { payload: 'payload' }

    it('should post the login data', () => {
      const generator = sagas.requestToken(action)
      const actual = generator.next().value
      const expected = call(post, endpoints.LOGIN_ENDPOINT, action.payload)

      expect(actual).toEqual(expected)
    })

    it('should put requestTokenSuccess on success', () => {
      const data = 'data'
      const generator = sagas.requestToken(action)
      const expected = put(actions.requestTokenSuccess(data))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should redirect to home after a succesful login', () => {
      const data = 'data'
      const generator = sagas.requestToken(action)
      const expected = put(push('/home'))

      generator.next()
      generator.next({ data })
      const actual = generator.next().value

      expect(actual).toEqual(expected)
    })

    it('should put requestTokenFail on errors', () => {
      const error = 'error'
      const generator = sagas.requestToken(action)
      const expected = put(actions.requestTokenFail(error))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })
})
