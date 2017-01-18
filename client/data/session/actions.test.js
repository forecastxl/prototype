import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a REQUEST_TOKEN action', () => {
    const actual = actions.requestToken('payload')
    const expected = {
      type: types.REQUEST_TOKEN,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a REQUEST_TOKEN_SUCCESS action', () => {
    const actual = actions.requestTokenSuccess('payload')
    const expected = {
      type: types.REQUEST_TOKEN_SUCCESS,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a REQUEST_TOKEN_FAIL action', () => {
    const actual = actions.requestTokenFail('payload')
    const expected = {
      type: types.REQUEST_TOKEN_FAIL,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a DESTROY_TOKEN action', () => {
    const actual = actions.destroyToken()
    const expected = {
      type: types.DESTROY_TOKEN
    }

    expect(actual).toEqual(expected)
  })
})
