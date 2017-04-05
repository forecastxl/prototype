import { transformResponseData } from '../transform'
import { ClientError, ServerError } from '../errors'

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
    return response.json()
      .then(transformResponseData)
  }

  /**
   * 400 - 499
   * Returns a promise that rejects with a ClientError
   */

  if (response.status >= 400 && response.status <= 499) {
    return response.json()
      .then(transformResponseData)
      .then(data => Promise.reject(new ClientError({ response, data })))
  }

  /**
   * 300 - 399 and 500 - 599
   * Returns a promise that rejects with a ServerError
   */

  return Promise.reject(new ServerError(response.statusText || 'Something went wrong on the server'))
}

export default handleResponse
