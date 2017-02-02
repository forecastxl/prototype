import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a FETCH_FAIL action', () => {
    const actual = actions.fetchFail('message')
    const expected = {
      type: types.FETCH_FAIL,
      errorMessage: 'message'
    }

    expect(actual).toEqual(expected)
  })
})
