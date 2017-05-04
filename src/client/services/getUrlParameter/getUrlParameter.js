const getUrlParameter = parameterName => {
  // Remove questionmark from querystring
  const query = window.location.search.substring(1)

  // Split all parameters
  const params = query.split('&')

  for (let i = 0; i < params.length; i += 1) {
    // Split parameters into key value pairs
    const pair = params[i].split('=')

    // Return value if it matches the desired parameterName
    if (pair[0] === parameterName) return pair[1]
  }

  return false
}

export default getUrlParameter
