import transformToSnakeCase from './transformToSnakeCase'

/**
 * Transforms data sent to the api to a format that can be used by the backend. Returns the
 * data synchronously.
 */

function transformRequestData(data) {
  let transformedData = data

  // convert the camelcase to snakecase for the backend
  transformedData = transformToSnakeCase(transformedData)

  return transformedData
}

export default transformRequestData
