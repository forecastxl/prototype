import { combineReducers } from 'redux'
import { reducer as notifications } from './components/notifications'
import { reducer as profile } from './components/profile'
import { reducer as session } from './data/session'

export default combineReducers({
  notifications,
  profile,
  session
})
