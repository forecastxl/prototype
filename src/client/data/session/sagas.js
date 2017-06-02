import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'
import endpoints from '../../services/endpoints'
import api from '../../services/api'
import * as actions from './actions'
import * as types from './actionTypes'

export function* login({ payload }) {
  const endpoint = endpoints.constant.LOGIN
  const data = payload

  try {
    const response = yield call(api.post, { endpoint, data })
    yield put(actions.loginSuccess(response.token))
    yield put(push('/'))
  } catch (error) {
    yield put(actions.loginFailure(error))
  }
}

export function* watchLoginSubmit() {
  yield takeLatest(types.LOGIN_SUBMIT, login)
}
