import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as types from '../actionTypes'
import { requestResetPassword } from '../actions'
import ForgotPassword from './ForgotPassword'

export class ForgotPasswordContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
    this.changeEmail = this.changeEmail.bind(this)
    this.processForm = this.processForm.bind(this)
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  processForm(event) {
    event.preventDefault()
    this.props.requestResetPassword(this.state.email)
  }

  render() {
    return (
      <ForgotPassword
        email={this.state.email}
        errors={this.props.errors}
        onChange={this.changeEmail}
        onSubmit={this.processForm}
      />
    )
  }
}

ForgotPasswordContainer.propTypes = {
  errors: PropTypes.object.isRequired,
  requestResetPassword: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  errors: state.api[types.REQUEST_RESET_PASSWORD].errors
})

export default connect(mapStateToProps, { requestResetPassword })(ForgotPasswordContainer)
