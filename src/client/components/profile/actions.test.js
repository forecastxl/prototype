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

  it('should create a UPDATE_PROFILE_VALIDATION_FAILURE action', () => {
    expect(actions.updateProfileValidationFailure()).toEqual({
      type: types.UPDATE_PROFILE_VALIDATION_FAILURE
    })
  })

  it('should create a UPDATE_PROFILE_CLIENT_FAILURE action', () => {
    expect(actions.updateProfileClientFailure()).toEqual({
      type: types.UPDATE_PROFILE_CLIENT_FAILURE
    })
  })

  it('should create a UPDATE_PROFILE_SERVER_FAILURE action', () => {
    expect(actions.updateProfileServerFailure()).toEqual({
      type: types.UPDATE_PROFILE_SERVER_FAILURE
    })
  })

  it('should create a UPDATE_PASSWORD action', () => {
    expect(actions.updatePassword()).toEqual({
      type: types.UPDATE_PASSWORD
    })
  })

  it('should create a UPDATE_PASSWORD_SUCCESS action', () => {
    expect(actions.updatePasswordSuccess()).toEqual({
      type: types.UPDATE_PASSWORD_SUCCESS
    })
  })

  it('should create a UPDATE_PASSWORD_VALIDATION_FAILURE action', () => {
    expect(actions.updatePasswordValidationFailure()).toEqual({
      type: types.UPDATE_PASSWORD_VALIDATION_FAILURE
    })
  })

  it('should create a UPDATE_PASSWORD_CLIENT_FAILURE action', () => {
    expect(actions.updatePasswordClientFailure()).toEqual({
      type: types.UPDATE_PASSWORD_CLIENT_FAILURE
    })
  })

  it('should create a UPDATE_PASSWORD_SERVER_FAILURE action', () => {
    expect(actions.updatePasswordServerFailure()).toEqual({
      type: types.UPDATE_PASSWORD_SERVER_FAILURE
    })
  })
})
