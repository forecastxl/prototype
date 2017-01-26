import { sagas as session } from './data/session'
import { sagas as login } from './components/login'
import { sagas as signup } from './components/signup'

const rootSaga = function* () {
  yield [
    login.watchRequestPasswordReset(),
    login.watchPasswordReset(),
    signup.watchConfirmAccount(),
    signup.watchRequestAccount(),
    session.watchRequestToken()
  ]
}

export default rootSaga
