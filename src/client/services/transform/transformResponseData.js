import transformToCamelCase from './transformToCamelCase'
import transformErrorArraysToString from './transformErrorArraysToString'
import transformForReduxForms from './transformForReduxForms'

/**
 * Transforms data returned by the api to a format that can be used by the application. Returns a
 * promise that resolves to the transformed data.
 */

function transformResponseData(data) {
  let transformedData = data

  // convert the snakecase that the api returns to camelCase
  transformedData = transformToCamelCase(transformedData)

  // join arrays in the errors key to strings
  transformedData = transformErrorArraysToString(transformedData)

  // make sure the data format is compatible with redux forms
  transformedData = transformForReduxForms(transformedData)

  return Promise.resolve(transformedData)
}

export default transformResponseData
