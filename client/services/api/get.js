import fetchy from '../fetchy'

const get = ({ endpoint, token }) => {
  const init = {
    method: 'GET'
  }

  const headers = {
    Authorization: token ? `Bearer ${token}` : undefined
  }

  init.headers = new Headers(headers)

  return fetchy(endpoint, init)
}

export default get
