import { sagas as login } from './components/login'

const rootSaga = function* () {
  yield [
    login.watchLoginUser()
  ]
}

export default rootSaga
