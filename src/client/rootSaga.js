import { all } from 'redux-saga/effects'
import { sagas as signup } from './components/signup'
import { sagas as session } from './data/session'
import { sagas as password } from './components/password'
import { sagas as profile } from './components/profile'

const rootSaga = function*() {
  yield all([
    session.watchLoginSubmit(),
    signup.watchCreateAccount(),
    signup.watchConfirmAccount(),
    password.watchRequestResetPassword(),
    password.watchResetPassword(),
    profile.watchFetchProfile(),
    profile.watchUpdateProfile()
  ])
}

export default rootSaga
