import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import getParam from '../../../services/getParam'
import * as types from '../actionTypes'
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
    if (this.state.parsedToken && this.state.token && !this.props.isFetching) {
      this.props.confirmAccount({ token: this.state.token })
    }
  }

  render() {
    return (
      <SignupConfirm
        hasToken={this.state.parsedToken && !!this.state.token}
        isFetching={this.props.isFetching}
        errors={this.props.errors}
      />
    )
  }
}

SignupConfirmContainer.propTypes = {
  confirmAccount: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  errors: state.api[types.CONFIRM_ACCOUNT].errors,
  isFetching: state.api[types.CONFIRM_ACCOUNT].isFetching
})

export default connect(mapStateToProps, { confirmAccount })(SignupConfirmContainer)
