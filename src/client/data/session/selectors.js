export const getSessionState = state => state.session
export const getToken = state => state.session.token
export const hasToken = state => !!state.session.token
