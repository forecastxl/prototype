import { combineReducers } from 'redux'
import { constants as SESSION, reducer as session } from './data/session'

export default combineReducers({
  [SESSION.NAME]: session
})
