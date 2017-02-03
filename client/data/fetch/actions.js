import * as types from './actionTypes'

export const fetchFail = errorMessage => ({
  type: types.FETCH_FAIL,
  errorMessage
})
