import fetchy from '../fetchy'
import { transformRequestData } from '../transform'

const post = ({ endpoint, token, data }) => {
  const init = {
    method: 'POST',
    body: JSON.stringify(transformRequestData(data))
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : undefined
  }

  init.headers = new Headers(headers)

  return fetchy(endpoint, init)
}

export default post
