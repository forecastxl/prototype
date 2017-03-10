import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a CONFIRM_ACCOUNT action', () => {
    const actual = actions.confirmAccount('token')
    const expected = {
      type: types.CONFIRM_ACCOUNT,
      api: { key: types.CONFIRM_ACCOUNT, isFetching: true, errors: {} },
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CONFIRM_ACCOUNT_SUCCESS action', () => {
    const actual = actions.confirmAccountSuccess('token')
    const expected = {
      type: types.CONFIRM_ACCOUNT_SUCCESS,
      api: { key: types.CONFIRM_ACCOUNT, isFetching: false, errors: {} },
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CONFIRM_ACCOUNT_FAIL action', () => {
    const actual = actions.confirmAccountFail('errors')
    const expected = {
      type: types.CONFIRM_ACCOUNT_FAIL,
      api: { key: types.CONFIRM_ACCOUNT, isFetching: false, errors: 'errors' }
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CREATE_ACCOUNT action', () => {
    const actual = actions.createAccount('account')
    const expected = {
      type: types.CREATE_ACCOUNT,
      api: { key: types.CREATE_ACCOUNT, isFetching: true, errors: {} },
      account: 'account'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CREATE_ACCOUNT_SUCCESS action', () => {
    const actual = actions.createAccountSuccess()
    const expected = {
      type: types.CREATE_ACCOUNT_SUCCESS,
      api: { key: types.CREATE_ACCOUNT, isFetching: false, errors: {} }
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CREATE_ACCOUNT_FAIL action', () => {
    const actual = actions.createAccountFail('errors')
    const expected = {
      type: types.CREATE_ACCOUNT_FAIL,
      api: { key: types.CREATE_ACCOUNT, isFetching: false, errors: 'errors' }
    }

    expect(actual).toEqual(expected)
  })

  it('should create a LOGIN action', () => {
    const actual = actions.login('user')
    const expected = {
      type: types.LOGIN,
      api: { key: types.LOGIN, isFetching: true, errors: {} },
      user: 'user'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a LOGIN_SUCCESS action', () => {
    const actual = actions.loginSuccess('token')
    const expected = {
      type: types.LOGIN_SUCCESS,
      api: { key: types.LOGIN, isFetching: false, errors: {} },
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a LOGIN_FAIL action', () => {
    const actual = actions.loginFail('errors')
    const expected = {
      type: types.LOGIN_FAIL,
      api: { key: types.LOGIN, isFetching: false, errors: 'errors' }
    }

    expect(actual).toEqual(expected)
  })

  it('should create a LOGOUT action', () => {
    const actual = actions.logout()
    const expected = {
      type: types.LOGOUT
    }

    expect(actual).toEqual(expected)
  })
})
