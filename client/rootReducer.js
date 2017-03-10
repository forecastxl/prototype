import { combineReducers } from 'redux'
import { reducer as fetch } from './data/fetch'
import { reducer as notification } from './components/notification'
import { reducer as profile } from './components/profile'
import { reducer as session } from './data/session'

export default combineReducers({
  fetch,
  notification,
  profile,
  session
})
