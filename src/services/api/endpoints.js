let base

// istanbul ignore if: this will never be reached when testing
if (process.env.NODE_ENV === 'production') {
  base = 'https://www.forecastxl.com/api/v2'
} else {
  base = '//192.168.100.3:3000/api/v2'
}

export const LOGIN_ENDPOINT = `${base}/users/login`
