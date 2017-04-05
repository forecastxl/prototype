import camelcase from 'camelcase'
import mapObj from 'map-obj'

function camelCaseKey(key, value) {
  return [camelcase(key), value]
}

/**
 * Recursively converts all snakecased keys in an object to camelcase.
 */

function transformToCamelCase(objectWithSnakeCasedKeys) {
  if (!objectWithSnakeCasedKeys) {
    throw Error('Need a parameter to transform to camelcase')
  }

  return mapObj(objectWithSnakeCasedKeys, camelCaseKey, { deep: true })
}

export default transformToCamelCase
