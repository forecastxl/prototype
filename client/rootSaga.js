import { sagas as user } from './components/user'

const rootSaga = function* () {
  yield [
    user.watchLogin()
  ]
}

export default rootSaga
