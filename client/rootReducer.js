import { combineReducers } from 'redux'
import { constants as SESSION, reducer as session } from './components/session'

export default combineReducers({
  [SESSION.NAME]: session
})
