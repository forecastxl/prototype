import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Profile from './Profile'

export class ProfileContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: {
        ...this.props.profile
      }
    }
  }

  componentDidMount() {
    this.props.fetchProfile()
  }

  render() {
    return (
      <Profile profile={this.props.profile} />
    )
  }

}

ProfileContainer.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { fetchProfile: actions.fetchProfile })(ProfileContainer)
