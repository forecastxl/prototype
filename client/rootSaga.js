import { sagas as session } from './data/session'

const rootSaga = function* () {
  yield [
    session.watchRequestToken()
  ]
}

export default rootSaga
