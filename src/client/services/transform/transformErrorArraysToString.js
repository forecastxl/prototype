/* eslint-disable no-param-reassign */

import mapObj from 'map-obj'

function arrayToString(key, value) {
  if (!Array.isArray(value)) return [key, value]

  return [key, value.join('. ')]
}

/**
 * Recursively joins all arrays in the errors object to strings
 */

function transformErrorArraysToString(data) {
  if (!('errors' in data)) return data

  data.errors = mapObj(data.errors, arrayToString, { deep: true })

  return data
}

export default transformErrorArraysToString
