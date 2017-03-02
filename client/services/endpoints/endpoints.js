const base = process.env.API

// static
export const LOGIN = `${base}/users/login`
export const CREATE_ACCOUNT = `${base}/users/signup`
export const CONFIRM_ACCOUNT = `${base}/users/confirm`
export const RESET_PASSWORD = `${base}/users/reset_password`
export const REQUEST_RESET_PASSWORD = `${base}/users/forgot_password`
export const PROFILE = `${base}/users/me`

// dynamic
export const user = id => `${base}/users/${id}`
