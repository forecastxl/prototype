import { sagas as session } from './data/session'
import { sagas as signup } from './components/signup'

const rootSaga = function* () {
  yield [
    signup.watchRequestAccount(),
    session.watchRequestToken()
  ]
}

export default rootSaga
