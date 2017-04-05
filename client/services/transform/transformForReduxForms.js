/* eslint-disable no-underscore-dangle */

/**
 * Our api returns general validation errors under the `base` key, but redux-forms expects them to
 * be under the `_error` key. This function transforms the `base` key to the proper key.
 */

function transformForReduxForms(data) {
  if ('base' in data) {
    data._error = data.base
    delete data.base
  }

  return data
}

export default transformForReduxForms
