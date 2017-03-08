import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import * as types from '../actionTypes'
import ChangePassword from './ChangePassword'

export class ChangePasswordContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        currentPassword: '',
        password: '',
        passwordConfirmation: ''
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState({
      user: { ...this.state.user, [event.target.name]: event.target.value }
    })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.updatePassword(this.state.user)
  }

  render() {
    return (
      <ChangePassword
        user={this.state.user}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        errors={this.props.errors}
      />
    )
  }
}

ChangePasswordContainer.propTypes = {
  errors: PropTypes.object.isRequired,
  updatePassword: PropTypes.func.isRequired
}

const mapActions = {
  updatePassword: actions.updatePassword
}

const mapStateToProps = state => ({
  errors: state.api[types.UPDATE_PASSWORD].errors
})

export default connect(mapStateToProps, mapActions)(ChangePasswordContainer)
