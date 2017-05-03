const getUrlParameter = parameterName => {
  // remove questionmark from querystring
  const query = window.location.search.substring(1)

  // split all parameters
  const params = query.split('&')

  for (let i = 0; i < params.length; i += 1) {
    // split parameters into key value pairs
    const pair = params[i].split('=')

    // return value if it matches the desired parameterName
    if (pair[0] === parameterName) return pair[1]
  }

  return false
}

export default getUrlParameter
