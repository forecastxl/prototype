const base = process.env.API

const constant = {
  LOGIN: `${base}/users/login`,
  CREATE_ACCOUNT: `${base}/users/signup`,
  CONFIRM_ACCOUNT: `${base}/users/confirm`,
  RESET_PASSWORD: `${base}/users/reset_password`,
  REQUEST_RESET_PASSWORD: `${base}/users/forgot_password`,
  PROFILE: `${base}/users/me`
}

export default constant
