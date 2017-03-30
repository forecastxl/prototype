import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import post from '../../services/post'
import { actions as notificationActions } from '../notifications'
import { endpoints } from '../../services/endpoints'
import * as actions from './actions'
import * as types from './actionTypes'
import * as sagas from './sagas'

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
    payload: 'payload'
  }

  it('should post the password data', () => {
    const generator = sagas.resetPassword(action)
    const actual = generator.next().value
    const expected = call(post, endpoints.RESET_PASSWORD, { payload: action.payload })

    expect(actual).toEqual(expected)
  })

  it('should put resetPasswordSuccess on success', () => {
    const data = { token: 'token' }
    const generator = sagas.resetPassword(action)
    const expected = put(actions.resetPasswordSuccess())

    generator.next()
    const actual = generator.next({ data }).value

    expect(actual).toEqual(expected)
  })

  it('should redirect to home on success', () => {
    const data = { token: 'token' }
    const generator = sagas.resetPassword(action)
    const expected = put(push('/'))

    generator.next()
    generator.next({ data })
    const actual = generator.next().value

    expect(actual).toEqual(expected)
  })

  it('should put resetPasswordFailure on api errors', () => {
    const error = { errors: 'errors' }
    const generator = sagas.resetPassword(action)
    const expected = put(actions.resetPasswordFailure(error.errors))

    generator.next()
    const actual = generator.next({ error }).value

    expect(actual).toEqual(expected)
  })

  it('should put resetPasswordFailure on network errors', () => {
    const error = new Error('error')
    const generator = sagas.resetPassword(action)
    const expected = put(actions.resetPasswordFailure(error))

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
    payload: 'email'
  }

  it('should post the email data', () => {
    const generator = sagas.requestResetPassword(action)
    const actual = generator.next().value
    const expected = call(post, endpoints.REQUEST_RESET_PASSWORD, { email: action.payload })

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

  it('should put addNotification on success', () => {
    const data = { token: 'token' }
    const generator = sagas.requestResetPassword(action)
    const expected = put(notificationActions.addNotification('Wachtwoord reset aangevraagd'))

    generator.next()
    generator.next({ data })
    const actual = generator.next().value

    expect(actual).toEqual(expected)
  })

  it('should redirect on success', () => {
    const data = { token: 'token' }
    const generator = sagas.requestResetPassword(action)
    const expected = put(push('/login'))

    generator.next()
    generator.next({ data })
    generator.next()
    const actual = generator.next().value

    expect(actual).toEqual(expected)
  })

  it('should put requestResetPasswordFailure on api errors', () => {
    const error = { errors: 'errors' }
    const generator = sagas.requestResetPassword(action)
    const expected = put(actions.requestResetPasswordFailure(error.errors))

    generator.next()
    const actual = generator.next({ error }).value

    expect(actual).toEqual(expected)
  })

  it('should put requestResetPasswordFailure on network errors', () => {
    const error = new Error('error')
    const generator = sagas.requestResetPassword(action)
    const expected = put(actions.requestResetPasswordFailure(error))

    generator.next()
    const actual = generator.next({ error }).value

    expect(actual).toEqual(expected)
  })
})
