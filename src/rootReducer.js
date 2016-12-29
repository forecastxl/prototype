import { combineReducers } from 'redux'
import { constants as LOGIN, reducer as login } from './components/login'

export default combineReducers({
  [LOGIN.NAME]: login
})
