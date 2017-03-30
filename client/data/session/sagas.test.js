import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
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

  it('should post the user data', () => {
    const generator = sagas.login(action)
    const actual = generator.next().value
    const expected = call(post, endpoints.LOGIN, { user: action.payload })

    expect(actual).toEqual(expected)
  })

  it('should put loginSuccess after a successful request', () => {
    const data = { token: 'token' }
    const generator = sagas.login(action)
    const expected = put(actions.loginSuccess(data.token))

    generator.next()
    const actual = generator.next({ data }).value

    expect(actual).toEqual(expected)
  })

  it('should redirect to home after a succesful request', () => {
    const data = { token: 'token' }
    const generator = sagas.login(action)
    const expected = put(push('/'))

    generator.next()
    generator.next({ data })
    const actual = generator.next().value

    expect(actual).toEqual(expected)
  })

  it('should put loginFailure on api errors', () => {
    const error = { errors: 'errors' }
    const generator = sagas.login(action)
    const expected = put(actions.loginFailure(error.errors))

    generator.next()
    const actual = generator.next({ error }).value

    expect(actual).toEqual(expected)
  })

  it('should put loginFailure on network errors', () => {
    const error = new Error('error')
    const generator = sagas.login(action)
    const expected = put(actions.loginFailure(error))

    generator.next()
    const actual = generator.next({ error }).value

    expect(actual).toEqual(expected)
  })
})
