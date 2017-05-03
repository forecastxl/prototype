import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import getUrlParameter from '../../../services/getUrlParameter'
import { resetPassword } from '../actions'
import ResetPassword from './ResetPassword'

export class ResetPasswordContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parsedToken: false,
      token: false,
      password: '',
      passwordConfirmation: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.processForm = this.processForm.bind(this)
  }

  componentWillMount() {
    if (!this.state.parsedToken) {
      this.setState({
        parsedToken: true,
        token: getUrlParameter('token')
      })
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  processForm(event) {
    event.preventDefault()
    this.props.resetPassword({
      token: this.state.token,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    })
  }

  render() {
    return (
      <ResetPassword
        hasToken={this.state.parsedToken && !!this.state.token}
        errors={{}}
        onSubmit={this.processForm}
        onChange={this.handleChange}
        password={this.state.password}
        passwordConfirmation={this.state.passwordConfirmation}
      />
    )
  }
}

ResetPasswordContainer.propTypes = {
  resetPassword: PropTypes.func.isRequired
}

export default connect(null, { resetPassword })(ResetPasswordContainer)
