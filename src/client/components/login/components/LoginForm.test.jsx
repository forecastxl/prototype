import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { LoginForm } from './LoginForm'

describe('<LoginForm />', () => {
  it('renders a submittable form when not submitting', () => {
    const wrapper = shallow(<LoginForm handleSubmit={() => {}} submitting={false} valid={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders an error message when given an error', () => {
    const wrapper = shallow(
      <LoginForm handleSubmit={() => {}} submitting={false} valid={false} error="Some error" />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a disabled submit button when invalid', () => {
    const wrapper = shallow(
      <LoginForm handleSubmit={() => {}} submitting={false} valid error="Some error" />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
