const getParam = name => {
  // remove questionmark from querystring
  const query = window.location.search.substring(1)
  // separate all parameters
  const params = query.split('&')

  for (let i = 0; i < params.length; i += 1) {
    // split param into a key and a value
    const pair = params[i].split('=')

    // return value if it matches the desired name
    if (pair[0] === name) return pair[1]
  }

  return false
}

export default getParam
