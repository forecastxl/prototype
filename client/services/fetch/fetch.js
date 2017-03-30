import camelize from '../camelize'

async function fetchWrapper(endpoint, headers, options) {
  let init = {}

  if (options) init = { ...options }
  if (headers) init = { ...init, headers: new Headers(headers) }

  try {
    const response = await fetch(endpoint, init)
    const data = await response.json()

    // return the camelized data if the response was ok
    if (response.ok) return { data: camelize(data) }

    // otherwise return an error
    const error = new Error(response.statusText)

    // process any validation errors
    if (data.errors) {
      const validationErrors = camelize(data.errors)

      // rename base to a redux-forms can parse
      if (validationErrors.base) {
        // eslint-disable-next-line no-underscore-dangle
        validationErrors._error = validationErrors.base.join(', ')
        delete validationErrors.base
      }

      error.validationErrors = { ...validationErrors }
    }

    throw error
  } catch (error) {
    return { error }
  }
}

export default fetchWrapper
