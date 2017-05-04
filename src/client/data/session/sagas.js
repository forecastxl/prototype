import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import endpoints from '../../services/endpoints'
import api from '../../services/api'
import * as actions from './actions'
import * as types from './actionTypes'

export function* login({ payload }) {
  const endpoint = endpoints.constant.LOGIN
  const data = { user: payload }

  try {
    const response = yield call(api.post, { endpoint, data })
    yield put(actions.loginSuccess(response.token))
    yield put(push('/'))
  } catch (error) {
    if (error.name === 'SubmissionError') {
      yield put(actions.loginValidationFailure(error.errors))
    } else if (error.name === 'ClientError') {
      yield put(actions.loginClientFailure(error))
    } else {
      yield put(actions.loginServerFailure(error))
    }
  }
}

export function* watchLoginSubmit() {
  yield call(takeLatest, types.LOGIN_SUBMIT, login)
}
