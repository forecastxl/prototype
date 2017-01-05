import { constants } from '../../components/session'

export default store => next => action => {
  const state = store.getState()
  const NAME = constants.NAME

  // will include a token in the action if the flag was set and a token exists
  if (action.token && state[NAME] && state[NAME].token) {
    action.token = state[NAME].token
  }

  // pass action on
  return next(action)
}
