import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import get from '../../services/get'
import putService from '../../services/put'
import { endpoints } from '../../services/endpoints'
import { actions as fetchActions } from '../../data/fetch'
import * as actions from './actions'
import * as types from './actionTypes'
import * as sagas from './sagas'

describe('sagas', () => {
  describe('watchFetchProfile', () => {
    it('should respond to FETCH_PROFILE', () => {
      const generator = sagas.watchFetchProfile()
      const actual = generator.next().value
      const expected = call(takeLatest, types.FETCH_PROFILE, sagas.fetchProfile)

      expect(actual).toEqual(expected)
    })
  })

  describe('fetchProfile', () => {
    const action = {
      token: 'token'
    }

    it('should get the profile data', () => {
      const generator = sagas.fetchProfile(action)
      const actual = generator.next().value
      const expected = call(get, endpoints.PROFILE, action.token)

      expect(actual).toEqual(expected)
    })

    it('should put fetchProfileSuccess on success', () => {
      const data = { data: 'data' }
      const generator = sagas.fetchProfile(action)
      const expected = put(actions.fetchProfileSuccess(data.data))

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchProfileFail on api errors', () => {
      const error = { errors: 'errors' }
      const generator = sagas.fetchProfile(action)
      const expected = put(actions.fetchProfileFail(error.errors))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchFail on network errors', () => {
      const error = 'error'
      const generator = sagas.fetchProfile(action)
      const expected = put(fetchActions.fetchFail(error.message))

      generator.next()
      const actual = generator.next({ error }).value

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
      user: { id: 'id' },
      token: 'token'
    }

    it('should put the profile data', () => {
      const generator = sagas.updateProfile(action)
      const actual = generator.next().value
      const expected = call(putService, endpoints.user(action.user.id), action.user, action.token)

      expect(actual).toEqual(expected)
    })

    it('should put updateProfileSuccess on success', () => {
      const data = 'data'
      const generator = sagas.updateProfile(action)
      const expected = put(actions.updateProfileSuccess())

      generator.next()
      const actual = generator.next({ data }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchProfileFail on api errors', () => {
      const error = { errors: 'errors' }
      const generator = sagas.updateProfile(action)
      const expected = put(actions.updateProfileFail(error.errors))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })

    it('should put fetchFail on network errors', () => {
      const error = 'error'
      const generator = sagas.updateProfile(action)
      const expected = put(fetchActions.fetchFail(error.message))

      generator.next()
      const actual = generator.next({ error }).value

      expect(actual).toEqual(expected)
    })
  })
})
