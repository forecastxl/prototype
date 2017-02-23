import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Profile from './Profile'

describe('<Profile />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Profile
        errors={{}}
        onChange={() => {}}
        onSubmit={() => {}}
        profile={{
          firstName: '',
          lastName: '',
          email: '',
          currentPassword: '',
          newPassword: '',
          newPasswordConfirmation: ''
        }}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
