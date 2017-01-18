import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestAccount } from '../actions'
import SignupForm from './SignupForm'

export class SignupFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: {
        firstName: '',
        lastName: '',
        companyName: '',
        phoneNumber: '',
        locale: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        agreedToGeneralTerms: ''
      }
    }
    this.changeAccount = this.changeAccount.bind(this)
    this.processForm = this.processForm.bind(this)
  }

  changeAccount(event) {
    this.setState({
      account: {
        ...this.state.account,
        [event.target.name]: event.target.value
      }
    })
  }

  processForm(event) {
    event.preventDefault()
    this.props.requestAccount(this.state.account)
  }

  render() {
    return (
      <SignupForm
        errors={this.props.errors}
        onChange={this.changeAccount}
        onSubmit={this.processForm}
        account={this.state.account}
      />
    )
  }
}

SignupFormContainer.propTypes = {
  errors: PropTypes.object.isRequired,
  requestAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  errors: state.session.errors
})

export default connect(mapStateToProps, { requestAccount })(SignupFormContainer)
