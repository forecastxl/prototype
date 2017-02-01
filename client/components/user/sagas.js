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
    yield put(actions.loginSuccess(data.token))
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

export function* createAccount(action) {
  const { data, error } = yield call(post, endpoints.CREATE_ACCOUNT, action.account)
  if (data) {
    yield put(actions.createAccountSuccess(data.token))
    yield put(push('/signup/success'))
  } else {
    if (error.errors) {
      yield put(actions.createAccountFail(error.errors))
    }
    // TODO: put fetch errors here
  }
}

export function* watchCreateAccount() {
  yield call(takeLatest, types.CREATE_ACCOUNT, createAccount)
}

export function* confirmAccount(action) {
  const { data, error } = yield call(post, endpoints.CONFIRM_ACCOUNT, action.token)
  if (data) {
    yield put(actions.confirmAccountSuccess(data.token))
    yield put(push('/'))
  } else {
    if (error.errors) {
      yield put(actions.confirmAccountFail(error.errors))
    }
    // TODO: put fetch errors here
  }
}

export function* watchConfirmAccount() {
  yield call(takeLatest, types.CONFIRM_ACCOUNT, confirmAccount)
}
