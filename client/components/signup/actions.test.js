import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a CONFIRM_ACCOUNT action', () => {
    const actual = actions.confirmAccount('payload')
    const expected = {
      type: types.CONFIRM_ACCOUNT,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CONFIRM_ACCOUNT_SUCCESS action', () => {
    const actual = actions.confirmAccountSuccess()
    const expected = {
      type: types.CONFIRM_ACCOUNT_SUCCESS
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CONFIRM_ACCOUNT_FAIL action', () => {
    const actual = actions.confirmAccountFail('payload')
    const expected = {
      type: types.CONFIRM_ACCOUNT_FAIL,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a REQUEST_ACCOUNT action', () => {
    const actual = actions.requestAccount('payload')
    const expected = {
      type: types.REQUEST_ACCOUNT,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a REQUEST_ACCOUNT_SUCCESS action', () => {
    const actual = actions.requestAccountSuccess('payload')
    const expected = {
      type: types.REQUEST_ACCOUNT_SUCCESS,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a REQUEST_ACCOUNT_FAIL action', () => {
    const actual = actions.requestAccountFail('payload')
    const expected = {
      type: types.REQUEST_ACCOUNT_FAIL,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })
})
