let base

// istanbul ignore next: this will never be reached when testing
if (process.env.NODE_ENV === 'production') {
  base = `${process.env.PROD_API}/api/v2`
} else if (process.env.NODE_ENV === 'staging') {
  base = `${process.env.STAGING_API}/api/v2`
} else {
  base = `${process.env.DEV_API}/api/v2`
}

export const LOGIN = `${base}/users/login`
export const CREATE_ACCOUNT = `${base}/users/signup`
export const CONFIRM_ACCOUNT = `${base}/users/confirm`
export const RESET_PASSWORD = `${base}/users/reset_password`
export const REQUEST_RESET_PASSWORD = `${base}/users/forgot_password`
