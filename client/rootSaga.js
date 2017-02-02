import { sagas as user } from './components/user'

const rootSaga = function* () {
  yield [
    user.watchLogin(),
    user.watchCreateAccount(),
    user.watchConfirmAccount(),
    user.watchRequestResetPassword(),
    user.watchResetPassword()
  ]
}

export default rootSaga
