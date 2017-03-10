import camelize from '../camelize'

async function fetchWrapper(endpoint, headers, options) {
  let init = {}

  if (options) init = { ...options }
  if (headers) init = { ...init, headers: new Headers(headers) }

  try {
    // fetch is polyfilled with isomorphic-fetch
    // eslint-disable-next-line compat/compat
    const response = await fetch(endpoint, init)
    const data = await response.json()

    // return the camelized data if the response was ok
    if (response.ok) return { data: camelize(data) }

    // otherwise return an error with the error data with camelized errors
    const error = new Error(response.statusText)
    if (data.errors) error.errors = camelize(data.errors)

    throw error
  } catch (error) {
    return { error }
  }
}

export default fetchWrapper
