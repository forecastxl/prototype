import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import getParam from '../../../services/getParam'
import { confirmAccount } from '../actions'
import SignupConfirm from './SignupConfirm'

export class SignupConfirmContainer extends Component {
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
    // TODO: fix missing isFetching
    if (this.state.parsedToken && this.state.token) {
      this.props.confirmAccount(this.state.token)
    }
  }

  render() {
    return (
      <SignupConfirm
        hasToken={this.state.parsedToken && !!this.state.token}
        errors={{}}
        isFetching
      />
    )
  }
}

SignupConfirmContainer.propTypes = {
  confirmAccount: PropTypes.func.isRequired
}

export default connect(null, { confirmAccount })(SignupConfirmContainer)