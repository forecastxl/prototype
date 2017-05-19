import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbForgotPasswordForm } from './ForgotPasswordForm'

describe('<DumbForgotPasswordForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DumbForgotPasswordForm handleSubmit={() => {}} pristine submitting={false} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
