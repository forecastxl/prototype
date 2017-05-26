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

  it('renders errors', () => {
    const wrapper = shallow(
      <DumbForgotPasswordForm handleSubmit={() => {}} pristine submitting={false} error="Error" />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('enables the submit button when touched and not submitting', () => {
    const wrapper = shallow(
      <DumbForgotPasswordForm handleSubmit={() => {}} pristine={false} submitting={false} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
