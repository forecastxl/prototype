let base

// istanbul ignore if: this will never be reached when testing
if (process.env.NODE_ENV === 'production') {
  base = `${process.env.PROD_BASE}/api/v2`
} else {
  base = `${process.env.DEV_API}/api/v2`
}

export const LOGIN_ENDPOINT = `${base}/users/login`
