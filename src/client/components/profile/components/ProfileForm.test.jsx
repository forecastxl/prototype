import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbProfileForm } from './ProfileForm'

describe('<DumbProfileForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DumbProfileForm
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
