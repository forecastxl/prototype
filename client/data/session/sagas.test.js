import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import * as sagas from './sagas'
import * as actions from './actions'
import * as types from './actionTypes'

describe('watchCreateSession', () => {
  it('should respond to CREATE_SESSION', () => {
    const generator = sagas.watchCreateSession()
    const actual = generator.next().value
    const expected = call(takeLatest, types.CREATE_SESSION, sagas.createSession)

    expect(actual).toEqual(expected)
  })
})

describe('createSession', () => {
  const action = { payload: 'user' }

  it('should post the user data', () => {
    const generator = sagas.createSession(action)
    const actual = generator.next().value
    const expected = call(post, endpoints.CREATE_SESSION, { user: action.payload })

    expect(actual).toEqual(expected)
  })

  it('should put createSessionSuccess after a successful request', () => {
    const data = { token: 'token' }
    const generator = sagas.createSession(action)
    const expected = put(actions.createSessionSuccess(data.token))

    generator.next()
    const actual = generator.next({ data }).value

    expect(actual).toEqual(expected)
  })

  it('should redirect to home after a succesful request', () => {
    const data = { token: 'token' }
    const generator = sagas.createSession(action)
    const expected = put(push('/'))

    generator.next()
    generator.next({ data })
    const actual = generator.next().value

    expect(actual).toEqual(expected)
  })

  it('should put createSessionFailure on api errors', () => {
    const error = { errors: 'errors' }
    const generator = sagas.createSession(action)
    const expected = put(actions.createSessionFailure(error.errors))

    generator.next()
    const actual = generator.next({ error }).value

    expect(actual).toEqual(expected)
  })

  it('should put createSessionFailure on network errors', () => {
    const error = new Error('error')
    const generator = sagas.createSession(action)
    const expected = put(actions.createSessionFailure(error))

    generator.next()
    const actual = generator.next({ error }).value

    expect(actual).toEqual(expected)
  })
})
