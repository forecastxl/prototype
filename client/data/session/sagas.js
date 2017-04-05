import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import api from '../../services/api'
import * as actions from './actions'
import * as types from './actionTypes'

export function* login({ payload }) {
  try {
    const endpoint = endpoints.LOGIN
    const data = { user: payload }
    const response = yield call(api.post, { endpoint, data })
    yield put(actions.loginSuccess(response.token))
    yield put(push('/'))
  } catch (error) {
    yield put(actions.loginFailure(error))
  }
}

export function* watchLoginSubmit() {
  yield call(takeLatest, types.LOGIN_SUBMIT, login)
}
