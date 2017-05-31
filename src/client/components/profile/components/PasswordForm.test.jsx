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

  it('renders errors', () => {
    const wrapper = shallow(
      <DumbPasswordForm handleSubmit={() => {}} pristine submitting={false} error="Error" />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('enables the submit button when touched and not submitting', () => {
    const wrapper = shallow(
      <DumbPasswordForm handleSubmit={() => {}} pristine={false} submitting={false} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
