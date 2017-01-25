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
        email: '',
        password: '',
        passwordConfirmation: '',
        agreedToGeneralTerms: false
      }
    }
    this.changeAccountText = this.changeAccountText.bind(this)
    this.changeAccountCheckbox = this.changeAccountCheckbox.bind(this)
    this.processForm = this.processForm.bind(this)
  }

  changeAccountText(event) {
    this.setState({
      account: {
        ...this.state.account,
        [event.target.name]: event.target.value
      }
    })
  }

  changeAccountCheckbox(event) {
    this.setState({
      account: {
        ...this.state.account,
        [event.target.name]: event.target.checked
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
        onTextChange={this.changeAccountText}
        onCheckboxChange={this.changeAccountCheckbox}
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
  errors: state.signup.errors
})

export default connect(mapStateToProps, { requestAccount })(SignupFormContainer)
