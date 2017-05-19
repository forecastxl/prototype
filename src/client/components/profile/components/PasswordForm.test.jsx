import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbPasswordForm } from './PasswordForm'

describe('<DumbPasswordForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DumbPasswordForm handleSubmit={() => {}} pristine submitting={false} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
