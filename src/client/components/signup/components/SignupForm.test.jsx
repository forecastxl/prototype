import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbSignupForm } from './SignupForm'

describe('<DumbSignupForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DumbSignupForm handleSubmit={() => {}} pristine submitting={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const wrapper = shallow(
      <DumbSignupForm handleSubmit={() => {}} pristine submitting={false} error="Error" />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('enables the submit button when touched and not submitting', () => {
    const wrapper = shallow(
      <DumbSignupForm handleSubmit={() => {}} pristine={false} submitting={false} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
