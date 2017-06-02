import * as actions from './actions'

const middleware = store => next => action => {
  // Ignore redux forms submission errors, since they need to be handled locally
  const isSubmissionError = action.payload && action.payload.name === 'SubmissionError'

  // Redux forms sets an error flag as well, but does not include a payload
  const hasPayload = !!action.payload

  if (action.error && hasPayload && !isSubmissionError) {
    const { payload: { message, status } } = action
    store.dispatch(actions.catchError({ message, status }))
  }

  return next(action)
}

export default middleware
