import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a LOGIN_SUBMIT action', () => {
    expect(actions.loginSubmit()).toEqual({
      type: types.LOGIN_SUBMIT
    })
  })

  it('should create a LOGIN_SUCCESS action', () => {
    expect(actions.loginSuccess()).toEqual({
      type: types.LOGIN_SUCCESS
    })
  })

  it('should create a LOGIN_FAILURE action', () => {
    expect(actions.loginFailure()).toEqual({
      type: types.LOGIN_FAILURE
    })
  })

  it('should create a LOGOUT action', () => {
    expect(actions.logout()).toEqual({
      type: types.LOGOUT
    })
  })
})
