export default store => next => action => {
  const state = store.getState()

  // will include a token in the action if the flag was set and a token exists
  if (action.token && state.session && state.session.token) {
    action.token = state.session.token
  }

  // pass action on
  return next(action)
}
