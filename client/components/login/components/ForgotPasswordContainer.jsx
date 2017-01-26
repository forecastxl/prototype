import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestPasswordReset } from '../actions'
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
    this.props.requestPasswordReset({ email: this.state.email })
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
  requestPasswordReset: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  errors: state.session.errors
})

export default connect(mapStateToProps, { requestPasswordReset })(ForgotPasswordContainer)
