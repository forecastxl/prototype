import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import getParam from '../../../services/getParam'
import { ErrorList } from '../../errors'
import { confirmAccount } from '../actions'

export class SignupConfirm extends Component {
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
    if (this.state.parsedToken && !this.state.token) {
      return <div>Could not find a token. Did you use the correct link?</div>
    }

    if (this.props.isFetching) {
      return <div>Confirming account...</div>
    }

    if (this.props.errors.base) {
      return <ErrorList errors={this.props.errors.base} />
    }

    return <div>Confirmation successful, logging you in...</div>
  }
}

SignupConfirm.propTypes = {
  confirmAccount: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  errors: state.signup.errors,
  isFetching: state.signup.isFetching
})

export default connect(mapStateToProps, { confirmAccount })(SignupConfirm)
