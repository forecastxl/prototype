import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import getParam from '../../../services/getParam'
import * as types from '../actionTypes'
import { resetPassword } from '../actions'
import ResetPassword from './ResetPassword'

export class ResetPasswordContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parsedToken: false,
      token: false
    }
  }

  componentWillMount() {
    if (!this.state.parsedToken) {
      this.setState({
        parsedToken: true,
        token: getParam('token')
      })
    }
  }

  componentDidMount() {
    if (this.state.parsedToken && this.state.token && !this.props.isFetching) {
      this.props.resetPassword(this.state.token)
    }
  }

  render() {
    return (
      <ResetPassword
        hasToken={this.state.parsedToken && !!this.state.token}
        isFetching={this.props.isFetching}
        errors={this.props.errors}
      />
    )
  }
}

ResetPasswordContainer.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  errors: state.api[types.RESET_PASSWORD].errors,
  isFetching: state.api[types.RESET_PASSWORD].errors
})

export default connect(mapStateToProps, { resetPassword })(ResetPasswordContainer)
