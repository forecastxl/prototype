import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import Api, { endpoints } from '../../services/api'
import * as actions from './actions'
import * as types from './actionTypes'

export function* loginUser(action) {
  const { response, error } = yield call(Api.post, endpoints.LOGIN_ENDPOINT, action.payload)
  if (response) {
    yield put(actions.loginUserSuccess(response))
    yield put(push('/home'))
  } else {
    yield put(actions.loginUserFail(error))
  }
}

export function* watchLoginUser() {
  yield call(takeLatest, types.LOGIN_USER, loginUser)
}
