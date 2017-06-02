import * as actions from './actions'

const middleware = store => next => action => {
  // TODO: set flag to prevent recursion but allow passing an error around
  if (
    action.payload &&
    action.payload instanceof Error &&
    action.payload.name &&
    action.payload.name !== 'SubmissionError'
  ) {
    store.dispatch(actions.catchError(action.payload.message))
  }

  return next(action)
}

export default middleware
