import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a CATCH_ERROR action', () => {
    expect(actions.loginSubmit()).toEqual({
      type: types.CATCH_ERROR
    })
  })
})
