import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import endpoints from '../../services/endpoints'
import api from '../../services/api'
import * as sagas from './sagas'
import * as actions from './actions'
import * as types from './actionTypes'

describe('watchLoginSubmit', () => {
  it('should respond to LOGIN_SUBMIT', () => {
    const generator = sagas.watchLoginSubmit()
    const actual = generator.next().value
    const expected = call(takeLatest, types.LOGIN_SUBMIT, sagas.login)

    expect(actual).toEqual(expected)
  })
})

describe('login', () => {
  const action = { payload: 'user' }
  const endpoint = endpoints.constant.LOGIN
  const data = { user: action.payload }

  it('should post the user data', () => {
    const generator = sagas.login(action)
    const actual = generator.next().value
    const expected = call(api.post, { endpoint, data })

    expect(actual).toEqual(expected)
  })

  it('should put loginSuccess after a successful request', () => {
    const response = { token: 'token' }
    const generator = sagas.login(action)
    const expected = put(actions.loginSuccess(response.token))

    generator.next()
    const actual = generator.next(response).value

    expect(actual).toEqual(expected)
  })

  it('should redirect to home after a succesful request', () => {
    const response = { token: 'token' }
    const generator = sagas.login(action)
    const expected = put(push('/'))

    generator.next()
    generator.next(response)
    const actual = generator.next().value

    expect(actual).toEqual(expected)
  })

  it('should put loginValidationFailure on errors', () => {
    const error = { ...new Error('error'), name: 'SubmissionError', errors: 'errors' }
    const generator = sagas.login(action)
    const expected = put(actions.loginValidationFailure(error.errors))

    generator.next()
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })

  it('should put loginClientFailure on errors', () => {
    const error = { ...new Error('error'), name: 'ClientError' }
    const generator = sagas.login(action)
    const expected = put(actions.loginClientFailure(error))

    generator.next()
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })

  it('should put loginServerFailure on errors', () => {
    const error = new Error('error')
    const generator = sagas.login(action)
    const expected = put(actions.loginServerFailure(error))

    generator.next()
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })
})
