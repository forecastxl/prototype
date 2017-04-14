import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux'
import { reducer as profile } from './components/profile'
import { reducer as session } from './data/session'

export default combineReducers({
  form,
  notifications,
  profile,
  session
})
