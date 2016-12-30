import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
import LoginForm from './LoginForm'

export class LoginFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
    this.changeUser = this.changeUser.bind(this)
    this.processForm = this.processForm.bind(this)
  }

  changeUser(event) {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  processForm(event) {
    event.preventDefault()
    this.props.loginUser(this.state.user)
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        user={this.state.user}
      />
    )
  }
}

LoginFormContainer.propTypes = {
  loginUser: PropTypes.func.isRequired
}

export default connect(
  // istanbul ignore next: we only test the unconnected component
  () => ({}), { loginUser })(LoginFormContainer
)
