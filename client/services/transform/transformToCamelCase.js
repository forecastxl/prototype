import camelcase from 'camelcase'
import mapObj from 'map-obj'

function camelCaseKey(key, value) {
  return [camelcase(key), value]
}

/**
 * Recursively converts all snakecased keys in an object to camelcase.
 */

function transformToCamelCase(data) {
  if (!data) {
    throw Error('Need a parameter to transform to camelcase')
  }

  return mapObj(data, camelCaseKey, { deep: true })
}

export default transformToCamelCase
