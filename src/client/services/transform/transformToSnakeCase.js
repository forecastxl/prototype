import decamelize from 'decamelize'
import mapObj from 'map-obj'

function snakeCaseKey(key, value) {
  return [decamelize(key), value]
}

/**
 * Recursively converts all camelcased keys in an object to snakecase.
 */

function transformToSnakeCase(data) {
  if (!data) {
    throw Error('Need a parameter to transform to snakecase')
  }

  return mapObj(data, snakeCaseKey, { deep: true })
}

export default transformToSnakeCase
