import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a CREATE_SESSION action', () => {
    expect(actions.createSession()).toEqual({
      type: types.CREATE_SESSION
    })
  })

  it('should create a CREATE_SESSION_SUCCESS action', () => {
    expect(actions.createSessionSuccess()).toEqual({
      type: types.CREATE_SESSION_SUCCESS
    })
  })

  it('should create a CREATE_SESSION_FAIL action', () => {
    expect(actions.createSessionFail()).toEqual({
      type: types.CREATE_SESSION_FAIL
    })
  })

  it('should create a DESTROY_SESSION action', () => {
    expect(actions.destroySession()).toEqual({
      type: types.DESTROY_SESSION
    })
  })
})
