import decamelize from 'decamelize'

// converts all top-level keys of the passed object from camelcase to snakecase
const decamelizeWrapper = camelized => {
  const decamelized = {}

  Object.keys(camelized).forEach(key => {
    decamelized[decamelize(key)] = camelized[key]
  })

  return decamelized
}

export default decamelizeWrapper
