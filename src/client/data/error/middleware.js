import * as actions from './actions'

const middleware = store => next => action => {
  // Ignore errors that were already caught
  const isCaught = action.payload && action.payload.caught

  // Ignore redux forms submission errors, since they need to be handled locally
  const isSubmissionError = action.payload && action.payload.name === 'SubmissionError'

  // Redux forms sets an error flag as well, but does not include a payload
  const hasPayload = !!action.payload

  if (action.error && hasPayload && !isCaught && !isSubmissionError) {
    const error = action.payload
    error.caught = true
    store.dispatch(actions.catchError(error))
  }

  return next(action)
}

export default middleware
