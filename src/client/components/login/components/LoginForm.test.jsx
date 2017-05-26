import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbLoginForm } from './LoginForm'

describe('<DumbLoginForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DumbLoginForm handleSubmit={() => {}} submitting={false} valid={false} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const wrapper = shallow(
      <DumbLoginForm handleSubmit={() => {}} submitting={false} valid={false} error="Some error" />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a disabled submit button when invalid', () => {
    const wrapper = shallow(
      <DumbLoginForm handleSubmit={() => {}} submitting={false} valid error="Some error" />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
