import handleResponse from './handleResponse'

function fetchy(...args) {
  return fetch(...args)
    .then(handleResponse)
}

export default fetchy
