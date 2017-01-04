import { sagas as session } from './components/session'

const rootSaga = function* () {
  yield [
    session.watchLoginUser(),
    session.watchLogoutUser()
  ]
}

export default rootSaga
