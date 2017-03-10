import { sagas as login } from './components/login'
import { sagas as signup } from './components/signup'
import { sagas as password } from './components/password'
import { sagas as profile } from './components/profile'

const rootSaga = function* () {
  yield [
    login.watchLogin(),
    signup.watchCreateAccount(),
    signup.watchConfirmAccount(),
    password.watchRequestResetPassword(),
    password.watchResetPassword(),
    profile.watchFetchProfile(),
    profile.watchUpdateProfile()
  ]
}

export default rootSaga
