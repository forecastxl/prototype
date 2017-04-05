import transformToSnakeCase from './transformToSnakeCase'

/**
 * Transforms data sent to the api to a format that can be used by the backend. Returns the
 * data synchronously.
 */

function transformRequestData(data) {
  // convert the camelcase to snakecase for the backend
  const snakeCasedData = transformToSnakeCase(data)

  return snakeCasedData
}

export default transformRequestData
