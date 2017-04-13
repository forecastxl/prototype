/* eslint-disable no-underscore-dangle */

/**
 * Our api returns general validation errors under the `base` key, but redux-forms expects them to
 * be under the `_error` key. This function transforms the `base` key to the proper key.
 */

function transformForReduxForms(data) {
  if (data.errors && 'base' in data.errors) {
    data.errors._error = data.errors.base
    delete data.errors.base
  }

  return data
}

export default transformForReduxForms
