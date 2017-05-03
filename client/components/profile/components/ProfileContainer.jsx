import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../selectors'
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
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchProfile()
  }

  componentWillReceiveProps({ profile }) {
    if (profile) {
      this.setState({
        profile: {
          ...this.state.profile,
          firstName: profile.firstName,
          lastName: profile.lastName,
          email: profile.email
        }
      })
    }
  }

  onChange(event) {
    this.setState({
      profile: {
        ...this.state.profile,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit(event) {
    event.preventDefault()

    const user = {
      ...this.state.profile,
      id: this.props.profile.id
    }

    this.props.updateProfile(user)
  }

  render() {
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
    id: PropTypes.number.isRequired,
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
  profile: getProfile(state)
})

export default connect(mapStateToProps, mapActions)(ProfileContainer)
