import * as actions from './actions'

const middleware = store => next => action => {
  if (
    action.payload &&
    action.payload instanceof Error &&
    action.payload.name !== 'SubmissionError'
  ) {
    store.dispatch(actions.catchError(action.payload))
  }

  return next(action)
}

export default middleware
