import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import getParam from '../../../services/getParam'
import { ErrorList } from '../../errors'
import { resetPassword } from '../actions'

export class ResetPasswordContainer extends Component {
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
      this.props.resetPassword({ token: this.state.token })
    }
  }

  render() {
    if (this.state.parsedToken && !this.state.token) {
      return <div>Could not find a token. Did you use the correct link?</div>
    }

    if (this.props.isFetching) {
      return <div>Resetting password...</div>
    }

    if (this.props.errors.token) {
      return <ErrorList errors={this.props.errors.token} />
    }

    return <div>Reset successful, logging you in...</div>
  }
}

ResetPasswordContainer.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  errors: state.login.errors,
  isFetching: state.login.isFetching
})

export default connect(mapStateToProps, { resetPassword })(ResetPasswordContainer)
