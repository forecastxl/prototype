import decamelize from 'decamelize'
import mapObj from 'map-obj'

const decamelizeKey = (key, value) => [decamelize(key), value]

// recursively converts all keys of the passed object to snakecase
const decamelizeWrapper = camelCased => mapObj(camelCased, decamelizeKey, { deep: true })

export default decamelizeWrapper
