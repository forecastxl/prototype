import { sagas as session } from './components/session'

const rootSaga = function* () {
  yield [
    session.watchLoginUser()
  ]
}

export default rootSaga
