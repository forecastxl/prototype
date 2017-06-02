import { SubmissionError } from 'redux-form'
import { transformResponseData } from '../transform'

/**
 * Processes fetch responses and always returns a promise. Generic fetch errors will
 * reject with a TypeError.
 */

function handleResponse(response) {
  /**
   * 200 - 299
   * Returns a promise that resolves to the response data
   */

  if (response.ok) {
    return response.json().then(transformResponseData)
  }

  /**
   * 422
   * Returns a promise that rejects with a SubmissionError
   */

  if (response.status === 422) {
    return response
      .json()
      .then(transformResponseData)
      .then(data => Promise.reject(new SubmissionError(data.errors)))
  }

  /**
   * 400 - 499
   * Returns a promise that rejects with an error
   */

  if (response.status >= 400 && response.status <= 499) {
    return response.json().then(transformResponseData).then(data => {
      // Include the status in the error
      // eslint-disable-next-line no-underscore-dangle
      const error = new Error(data.errors._error)
      error.status = response.status
      return Promise.reject(error)
    })
  }

  /**
   * 300 - 399 and 500 - 599
   * Returns a promise that rejects with an error
   */

  // Include the status in the error
  const error = new Error(response.statusText)
  error.status = response.status
  return Promise.reject(error)
}

export default handleResponse
