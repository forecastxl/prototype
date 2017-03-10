import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import post from '../../services/post'
import { actions as fetchActions } from '../../data/fetch'
import { loginSuccess, loginFail } from './actions'
import { LOGIN, LOGOUT } from './actionTypes'

export function* login(action) {
  const { data, error } = yield call(post, LOGIN, action.user)
  if (data) {
    yield put(loginSuccess(data.token))
    yield put(push('/'))
  } else if (error.errors) {
    yield put(loginFail(error.errors))
  } else {
    yield put(fetchActions.fetchFail(error.message))
  }
}

export function* watchLogin() {
  yield call(takeLatest, LOGIN, login)
}

export function* logout() {
  yield put(push('/login'))
}

export function* watchLogout() {
  yield call(takeLatest, LOGOUT, logout)
}
