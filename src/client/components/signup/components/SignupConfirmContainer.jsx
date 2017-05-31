import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import getUrlParameter from '../../../services/getUrlParameter'
import { confirmAccount } from '../actions'
import SignupConfirm from './SignupConfirm'

export class SignupConfirmContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: ''
    }
  }

  componentWillMount() {
    this.setState({
      token: getUrlParameter('token')
    })
  }

  componentDidMount() {
    if (this.state.token) {
      this.props.confirmAccount(this.state.token)
    }
  }

  render() {
    return <SignupConfirm hasToken={!!this.state.token} isFetching />
  }
}

SignupConfirmContainer.propTypes = {
  confirmAccount: func.isRequired
}

export default connect(null, { confirmAccount })(SignupConfirmContainer)
