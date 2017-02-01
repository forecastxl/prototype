import { combineReducers } from 'redux'
import { reducer as user } from './components/user'
import { reducer as api } from './data/api'
import { reducer as fetch } from './data/fetch'

export default combineReducers({
  api,
  fetch,
  user
})
