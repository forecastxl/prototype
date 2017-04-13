import { call, put, select } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { selectors as sessionSelectors } from '../../data/session'
import api from '../../services/api'
import endpoints from '../../services/endpoints'
import * as actions from './actions'
import * as types from './actionTypes'
import * as sagas from './sagas'

describe('watchFetchProfile', () => {
  it('should respond to FETCH_PROFILE', () => {
    const generator = sagas.watchFetchProfile()
    const actual = generator.next().value
    const expected = call(takeLatest, types.FETCH_PROFILE, sagas.fetchProfile)

    expect(actual).toEqual(expected)
  })
})

describe('fetchProfile', () => {
  const endpoint = endpoints.constant.PROFILE
  const token = 'token'

  it('should get the token', () => {
    const generator = sagas.fetchProfile()
    const actual = generator.next().value
    const expected = select(sessionSelectors.getToken)

    expect(actual).toEqual(expected)
  })

  it('should get the profile data', () => {
    const generator = sagas.fetchProfile()
    const expected = call(api.get, { endpoint, token })

    generator.next()
    const actual = generator.next(token).value

    expect(actual).toEqual(expected)
  })

  it('should put fetchProfileSuccess on success', () => {
    const response = { data: 'data' }
    const generator = sagas.fetchProfile()
    const expected = put(actions.fetchProfileSuccess(response.data))

    generator.next()
    generator.next(token)
    const actual = generator.next(response).value

    expect(actual).toEqual(expected)
  })

  it('should put fetchProfileFailure on errors', () => {
    const error = new Error('error')
    const generator = sagas.fetchProfile()
    const expected = put(actions.fetchProfileFailure(error))

    generator.next()
    generator.next()
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })
})

describe('watchUpdateProfile', () => {
  it('should respond to UPDATE_PROFILE', () => {
    const generator = sagas.watchUpdateProfile()
    const actual = generator.next().value
    const expected = call(takeLatest, types.UPDATE_PROFILE, sagas.updateProfile)

    expect(actual).toEqual(expected)
  })
})

describe('updateProfile', () => {
  const action = {
    payload: { id: 'id' }
  }
  const endpoint = endpoints.dynamic.user(action.payload.id)
  const data = action.payload
  const token = 'token'

  it('should get the token', () => {
    const generator = sagas.updateProfile(action)
    const actual = generator.next().value
    const expected = select(sessionSelectors.getToken)

    expect(actual).toEqual(expected)
  })

  it('should put the profile data', () => {
    const generator = sagas.updateProfile(action)
    const expected = call(api.put, { endpoint, data, token })

    generator.next()
    const actual = generator.next(token).value

    expect(actual).toEqual(expected)
  })

  it('should put updateProfileSuccess on success', () => {
    const response = 'data'
    const generator = sagas.updateProfile(action)
    const expected = put(actions.updateProfileSuccess())

    generator.next()
    generator.next(token)
    const actual = generator.next(response).value

    expect(actual).toEqual(expected)
  })

  it('should put updateProfileFailure on errors', () => {
    const error = new Error('error')
    const generator = sagas.updateProfile(action)
    const expected = put(actions.updateProfileFailure(error))

    generator.next()
    generator.next(token)
    const actual = generator.throw(error).value

    expect(actual).toEqual(expected)
  })
})
