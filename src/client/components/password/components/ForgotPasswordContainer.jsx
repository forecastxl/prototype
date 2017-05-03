import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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
        errors={{}}
        onChange={this.changeEmail}
        onSubmit={this.processForm}
      />
    )
  }
}

ForgotPasswordContainer.propTypes = {
  requestResetPassword: PropTypes.func.isRequired
}

export default connect(null, { requestResetPassword })(ForgotPasswordContainer)
