import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a FETCH_PROFILE action', () => {
    const actual = actions.fetchProfile()
    const expected = {
      type: types.FETCH_PROFILE,
      includeToken: true
    }

    expect(actual).toEqual(expected)
  })

  it('should create a FETCH_PROFILE_SUCCESS action', () => {
    const data = 'data'
    const actual = actions.fetchProfileSuccess(data)
    const expected = {
      type: types.FETCH_PROFILE_SUCCESS,
      data
    }

    expect(actual).toEqual(expected)
  })

  it('should create a FETCH_PROFILE_FAIL action', () => {
    const errors = 'errors'
    const actual = actions.fetchProfileFail(errors)
    const expected = {
      type: types.FETCH_PROFILE_FAIL,
      errors
    }

    expect(actual).toEqual(expected)
  })

  it('should create a UPDATE_PROFILE action', () => {
    const user = 'user'
    const actual = actions.updateProfile(user)
    const expected = {
      type: types.UPDATE_PROFILE,
      includeToken: true,
      user
    }

    expect(actual).toEqual(expected)
  })

  it('should create a UPDATE_PROFILE_SUCCESS action', () => {
    const actual = actions.updateProfileSuccess()
    const expected = {
      type: types.UPDATE_PROFILE_SUCCESS
    }

    expect(actual).toEqual(expected)
  })

  it('should create a UPDATE_PROFILE_FAIL action', () => {
    const errors = 'errors'
    const actual = actions.updateProfileFail(errors)
    const expected = {
      type: types.UPDATE_PROFILE_FAIL,
      errors
    }

    expect(actual).toEqual(expected)
  })
})
