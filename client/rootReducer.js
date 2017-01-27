import { combineReducers } from 'redux'
import { reducer as session } from './data/session'
import { reducer as signup } from './components/signup'
import { reducer as login } from './components/login'

export default combineReducers({
  login,
  session,
  signup
})
