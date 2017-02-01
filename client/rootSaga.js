import { sagas as user } from './components/user'

const rootSaga = function* () {
  yield [
    user.watchLogin(),
    user.watchCreateAccount(),
    user.watchConfirmAccount()
  ]
}

export default rootSaga
