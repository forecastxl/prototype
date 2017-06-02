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
    return response
      .json()
      .then(transformResponseData)
      .then(data => Promise.reject(new Error(data.errors.base)))
  }

  /**
   * 300 - 399 and 500 - 599
   * Returns a promise that rejects with an error
   */

  return Promise.reject(new Error(response.statusText || 'No message was provided'))
}

export default handleResponse
