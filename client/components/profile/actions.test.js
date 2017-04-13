import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a FETCH_PROFILE action', () => {
    expect(actions.fetchProfile()).toEqual({
      type: types.FETCH_PROFILE
    })
  })

  it('should create a FETCH_PROFILE_SUCCESS action', () => {
    expect(actions.fetchProfileSuccess()).toEqual({
      type: types.FETCH_PROFILE_SUCCESS
    })
  })

  it('should create a FETCH_PROFILE_FAILURE action', () => {
    expect(actions.fetchProfileFailure()).toEqual({
      type: types.FETCH_PROFILE_FAILURE
    })
  })

  it('should create a UPDATE_PROFILE action', () => {
    expect(actions.updateProfile()).toEqual({
      type: types.UPDATE_PROFILE
    })
  })

  it('should create a UPDATE_PROFILE_SUCCESS action', () => {
    expect(actions.updateProfileSuccess()).toEqual({
      type: types.UPDATE_PROFILE_SUCCESS
    })
  })

  it('should create a UPDATE_PROFILE_FAILURE action', () => {
    expect(actions.updateProfileFailure()).toEqual({
      type: types.UPDATE_PROFILE_FAILURE
    })
  })
})
