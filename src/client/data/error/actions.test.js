import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a CATCH_ERROR action', () => {
    expect(actions.catchError()).toEqual({
      type: types.CATCH_ERROR
    })
  })

  it('should create a RESOLVE_ERROR action', () => {
    expect(actions.resolveError()).toEqual({
      type: types.RESOLVE_ERROR
    })
  })
})
