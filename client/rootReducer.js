import { combineReducers } from 'redux'
import { reducer as api } from './data/api'
import { reducer as fetch } from './data/fetch'
import { reducer as notification } from './components/notification'
import { reducer as profile } from './components/profile'
import { reducer as user } from './components/user'

export default combineReducers({
  api,
  fetch,
  notification,
  profile,
  user
})
