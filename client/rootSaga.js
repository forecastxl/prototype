import { sagas as user } from './components/user'
import { sagas as profile } from './components/profile'

const rootSaga = function* () {
  yield [
    user.watchLogin(),
    user.watchLogout(),
    user.watchCreateAccount(),
    user.watchConfirmAccount(),
    user.watchRequestResetPassword(),
    user.watchResetPassword(),
    profile.watchFetchProfile()
  ]
}

export default rootSaga
