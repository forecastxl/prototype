import { sagas as login } from './components/login'

const rootSaga = function* () {
  yield [
    login.watchLoginUser(),
    login.watchLogoutUser()
  ]
}

export default rootSaga
