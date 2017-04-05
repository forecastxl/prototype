import transformToCamelCase from './transformToCamelCase'
import transformForReduxForms from './transformForReduxForms'

/**
 * Transforms data returned by the api to a format that can be used by the application. Returns a
 * promise that resolves to the transformed data.
 */

function transformResponseData(data) {
  // convert the snakecase that the api returns to camelCase
  const camelCasedData = transformToCamelCase(data)

  // make sure the data format is compatible with redux forms
  const reduxFormsCompatibleData = transformForReduxForms(camelCasedData)

  return Promise.resolve(reduxFormsCompatibleData)
}

export default transformResponseData
