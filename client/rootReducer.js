import { combineReducers } from 'redux'
import { reducer as fetch } from './data/fetch'
import { reducer as notifications } from './components/notifications'
import { reducer as profile } from './components/profile'
import { reducer as session } from './data/session'

export default combineReducers({
  fetch,
  notifications,
  profile,
  session
})
