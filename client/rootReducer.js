import { combineReducers } from 'redux'
import { reducer as session } from './data/session'
import { reducer as signup } from './components/signup'

export default combineReducers({
  session,
  signup
})
