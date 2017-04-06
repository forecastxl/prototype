const base = process.env.API

const user = id => `${base}/users/${id}`

const dynamic = {
  user
}

export default dynamic
