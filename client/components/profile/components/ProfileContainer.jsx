import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Profile from './Profile'

export class ProfileContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: {
        firstName: '',
        lastName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
      }
    }
  }

  componentDidMount() {
    this.props.fetchProfile()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile) {
      this.setState({ profile: {
        ...this.state.profile,
        ...nextProps.profile
      } })
    }
  }

  onChange = event => {
    this.setState({
      profile: {
        ...this.state.profile,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.updateProfile(this.state.profile)
  }


  render() {
    // TODO: replace errors with actual errors
    return (
      <Profile
        profile={this.state.profile}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        errors={{}}
      />
    )
  }
}

ProfileContainer.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
}

const mapActions = {
  fetchProfile: actions.fetchProfile,
  updateProfile: actions.updateProfile
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, mapActions)(ProfileContainer)
