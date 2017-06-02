import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { selectors } from '../../../data/session'

const mapStateToProps = state => ({
  hasAuth: selectors.hasToken(state)
})

export function DumbProtectedRoute({ hasAuth, ...props }) {
  return hasAuth ? <Route {...props} /> : <Redirect to="/login" />
}

DumbProtectedRoute.propTypes = {
  hasAuth: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(DumbProtectedRoute)
