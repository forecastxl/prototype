import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a FETCH_PROFILE action', () => {
    const actual = actions.fetchProfile()
    const expected = {
      type: types.FETCH_PROFILE,
      api: { key: types.FETCH_PROFILE, isFetching: true, errors: {} },
      includeToken: true
    }

    expect(actual).toEqual(expected)
  })

  it('should create a FETCH_PROFILE_SUCCESS action', () => {
    const actual = actions.fetchProfileSuccess()
    const expected = {
      type: types.FETCH_PROFILE_SUCCESS,
      api: { key: types.FETCH_PROFILE, isFetching: false, errors: {} }
    }

    expect(actual).toEqual(expected)
  })

  it('should create a FETCH_PROFILE_FAIL action', () => {
    const actual = actions.fetchProfileFail('error')
    const expected = {
      type: types.FETCH_PROFILE_FAIL,
      api: { key: types.FETCH_PROFILE, isFetching: false, errors: 'error' }
    }

    expect(actual).toEqual(expected)
  })

  it('should create a UPDATE_PROFILE action', () => {
    const actual = actions.updateProfile('user')
    const expected = {
      type: types.UPDATE_PROFILE,
      api: { key: types.UPDATE_PROFILE, isFetching: true, errors: {} },
      includeToken: true,
      user: 'user'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a UPDATE_PROFILE_SUCCESS action', () => {
    const actual = actions.updateProfileSuccess()
    const expected = {
      type: types.UPDATE_PROFILE_SUCCESS,
      api: { key: types.UPDATE_PROFILE, isFetching: false, errors: {} }
    }

    expect(actual).toEqual(expected)
  })

  it('should create a UPDATE_PROFILE_FAIL action', () => {
    const actual = actions.updateProfileFail('error')
    const expected = {
      type: types.UPDATE_PROFILE_FAIL,
      api: { key: types.UPDATE_PROFILE, isFetching: false, errors: 'error' }
    }

    expect(actual).toEqual(expected)
  })
})
