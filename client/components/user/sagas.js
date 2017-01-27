import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import * as actions from './actions'
import * as types from './actionTypes'

export function* login(action) {
  const { data, error } = yield call(post, endpoints.LOGIN, action.user)
  if (data) {
    yield put(actions.loginSuccess({ token: data.token }))
    yield put(push('/'))
  } else {
    if (error.errors) {
      yield put(actions.loginFail(error.errors))
    }
    // TODO: put fetch errors here
  }
}

export function* watchLogin() {
  yield call(takeLatest, types.LOGIN, login)
}
