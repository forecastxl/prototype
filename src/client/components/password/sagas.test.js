import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../services/api'
import { actions as notificationActions } from '../notifications'
import endpoints from '../../services/endpoints'
import * as actions from './actions'
import * as types from './actionTypes'
import * as sagas from './sagas'

jest.mock('../notifications/actions', () => ({
  addNotification: input => input
}))

describe('watchResetPassword', () => {
  it('should respond to RESET_PASSWORD', () => {
    const generator = sagas.watchResetPassword()
    const actual = generator.next().value
    const expected = takeLatest(types.RESET_PASSWORD, sagas.resetPassword)

    expect(actual).toEqual(expected)
  })
})

describe('resetPassword', () => {
  const action = { payload: 'payload' }
  const endpoint = endpoints.constant.RESET_PASSWORD
  const data = action.payload

  it('should post the password data', () => {
    const generator = sagas.resetPassword(action)
    const actual = generator.next().value
    const expected = call(api.post, { endpoint, data })

    expect(actual).toEqual(expected)
  })

  it('should put resetPasswordSuccess on success', () => {
    const generator = sagas.resetPassword(action)
    const expected = put(actions.resetPasswordSuccess())

    generator.next()
    const actual = generator.next().value

    expect(actual).toEqual(expected)
  })

  it('should redirect to home on success', () => {
    const generator = sagas.resetPassword(action)
    const expected = put(push('/'))

    generator.next()
    generator.next()
    const actual = generator.next().value

    expect(actual).toEqual(expected)
  })

  it('should put requestResetPasswordValidationFailure on validation errors', () => {
    const error = new Error('error')
    error.name = 'SubmissionError'
    error.errors = 'Validation errors'
    const generator = sagas.requestResetPassword(action)
    const expected = put(actions.requestResetPasswordValidationFailure(error.errors))

    generator.next()
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })

  it('should put resetPasswordClientFailure on client errors', () => {
    const error = new Error('error')
    error.name = 'ClientError'
    const generator = sagas.resetPassword(action)
    const expected = put(actions.resetPasswordClientFailure(error))

    generator.next()
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })

  it('should put resetPasswordServerFailure on server errors', () => {
    const error = new Error('error')
    error.name = 'ServerError'
    const generator = sagas.resetPassword(action)
    const expected = put(actions.resetPasswordServerFailure(error))

    generator.next()
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })
})

describe('watchRequestResetPassword', () => {
  it('should respond to REQUEST_RESET_PASSWORD', () => {
    const generator = sagas.watchRequestResetPassword()
    const actual = generator.next().value
    const expected = takeLatest(types.REQUEST_RESET_PASSWORD, sagas.requestResetPassword)

    expect(actual).toEqual(expected)
  })
})

describe('requestResetPassword', () => {
  const action = { payload: 'payload' }
  const endpoint = endpoints.constant.REQUEST_RESET_PASSWORD
  const data = { email: action.payload }

  it('should post the email data', () => {
    const generator = sagas.requestResetPassword(action)
    const actual = generator.next().value
    const expected = call(api.post, { endpoint, data })

    expect(actual).toEqual(expected)
  })

  it('should put requestResetPasswordSuccess on success', () => {
    const response = { token: 'token' }
    const generator = sagas.requestResetPassword(action)
    const expected = put(actions.requestResetPasswordSuccess(response.token))

    generator.next()
    const actual = generator.next(response).value

    expect(actual).toEqual(expected)
  })

  it('should put addNotification on success', () => {
    const response = { token: 'token' }
    const generator = sagas.requestResetPassword(action)
    const expected = put(
      notificationActions.addNotification({
        level: 'success',
        options: { title: 'title', message: 'message' }
      })
    )

    generator.next()
    generator.next(response)
    const actual = generator.next().value

    expect(actual).toEqual(expected)
  })

  it('should redirect on success', () => {
    const response = { token: 'token' }
    const generator = sagas.requestResetPassword(action)
    const expected = put(push('/login'))

    generator.next()
    generator.next(response)
    generator.next()
    const actual = generator.next().value

    expect(actual).toEqual(expected)
  })

  it('should put requestResetPasswordValidationFailure on validation errors', () => {
    const error = new Error('error')
    error.name = 'SubmissionError'
    error.errors = 'Validation errors'
    const generator = sagas.requestResetPassword(action)
    const expected = put(actions.requestResetPasswordValidationFailure(error.errors))

    generator.next()
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })

  it('should put requestResetPasswordClientFailure on client errors', () => {
    const error = new Error('error')
    error.name = 'ClientError'
    const generator = sagas.requestResetPassword(action)
    const expected = put(actions.requestResetPasswordClientFailure(error))

    generator.next()
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })

  it('should put requestResetPasswordServerFailure on server errors', () => {
    const error = new Error('error')
    error.name = 'ServerError'
    const generator = sagas.requestResetPassword(action)
    const expected = put(actions.requestResetPasswordServerFailure(error))

    generator.next()
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })
})
