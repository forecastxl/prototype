import camelcase from 'camelcase'
import mapObj from 'map-obj'

const camelizeKey = (key, value) => [camelcase(key), value]

// recursively converts all keys of the passed object to camelcase
const camelize = snakeCased => mapObj(snakeCased, camelizeKey, { deep: true })

export default camelize
